/* eslint-disable max-len */
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux'
import { ToastActionsCreators } from 'react-native-redux-toast'

import CartTotal from '../../components/CartTotal'
import CartActions from '../../store/ducks/cart'
import { convertToBRL } from '../../services/currency'

import {
  Container,
  CartList,
  OrderItem,
  ProductImage,
  OrderInfo,
  ProductTitle,
  ProductSize,
  ProductPrice,
  OrderQuantity,
  QuantityButton,
  QuantityValue,
  DeleteButton,
  Footer,
  MainButton,
  OrderButton,
  OrderButtonText,
  EmptyMessage
} from './styles'

const calculateSubtotal = item => {
  const subtotal = convertToBRL(item.price * item.quantity)
  return { ...item, subtotal }
}

function Cart ({ navigation }) {
  const items = useSelector(({ cart }) =>
    cart.data.map(item => calculateSubtotal(item))
  )

  const dispatch = useDispatch()

  function deleteItem (itemId) {
    dispatch(CartActions.removeItem(itemId))
    dispatch(ToastActionsCreators.displayInfo('Item exlcuído!', 1500))
  }

  function increaseItemQuantity (itemId) {
    dispatch(CartActions.increaseItemQuantity(itemId))
  }

  function decreaseItemQuantity (itemId) {
    dispatch(CartActions.decreaseItemQuantity(itemId))
  }

  function handleOrder () {
    if (items.length) {
      navigation.navigate('Order')
    } else {
      dispatch(ToastActionsCreators.displayError('Adicione items no carrinho'))
    }
  }

  function renderItem ({ item }) {
    console.log(item)
    return (
      <OrderItem>
        <ProductImage image={item.product.image} />
        <OrderInfo>
          <ProductTitle numberOfLines={1}>{item.product.name}</ProductTitle>
          <ProductSize numberOfLines={1}>
            {`Tamanho: ${item.size.name}`}
          </ProductSize>
          <ProductPrice>{item.subtotal}</ProductPrice>
        </OrderInfo>
        <OrderQuantity>
          <QuantityButton onPress={() => increaseItemQuantity(item.id)}>
            <Icon name='add' color='#fff' />
          </QuantityButton>
          <QuantityValue>{item.quantity}</QuantityValue>
          <QuantityButton onPress={() => decreaseItemQuantity(item.id)}>
            <Icon name='remove' color='#fff' />
          </QuantityButton>
        </OrderQuantity>
        <DeleteButton onPress={() => deleteItem(item.id)}>
          <Icon name='delete-forever' size={24} color='#E62638' />
        </DeleteButton>
      </OrderItem>
    )
  }

  return (
    <Container>
      <CartList
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={
          <OrderItem>
            <EmptyMessage>Carrinho vazio</EmptyMessage>
          </OrderItem>
        }
      />
      <Footer>
        <MainButton onPress={() => navigation.navigate('Main')}>
          <Icon name='add-shopping-cart' size={24} color='#555' />
        </MainButton>

        <OrderButton onPress={handleOrder}>
          <OrderButtonText>REALIZAR PEDIDO</OrderButtonText>
        </OrderButton>
      </Footer>
    </Container>
  )
}

Cart.navigationOptions = {
  title: 'Carrinho',
  headerRight: <CartTotal />
}

export default Cart
