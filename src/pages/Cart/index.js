import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CartActions from '../../store/ducks/cart';

import {
  Container,
  CartList,
  OrderItem,
  ProductImage,
  OrderInfo,
  ProductTitle,
  ProductSize,
  OrderItemCost,
  ProductPrice,
  OrderQuantity,
  QuantityButton,
  QuantityValue,
  DeleteButton,
  Footer,
  MainButton,
  OrderButton,
  OrderButtonText,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  static propTypes = {
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          price: PropTypes.string,
          product: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
          size: PropTypes.shape({
            name: PropTypes.string,
          }),
          quantity: PropTypes.number,
        }),
      ),
    }).isRequired,
    removeItem: PropTypes.func.isRequired,
    attItemQuantity: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {}

  renderOrderItem = ({ item }) => {
    const { removeItem, attItemQuantity } = this.props;
    const { quantity } = item;

    return (
      <OrderItem>
        <ProductImage source={{ uri: item.product.image.url }} />
        <OrderInfo>
          <ProductTitle>{item.product.name}</ProductTitle>
          <ProductSize>{`Tamanho: ${item.size.name}`}</ProductSize>
          <OrderItemCost>
            <ProductPrice>{`R$${item.subtotal}`}</ProductPrice>
            <OrderQuantity>
              <QuantityButton onPress={() => attItemQuantity(item.id, quantity - 1)}>
                <Icon name="remove" />
              </QuantityButton>
              <QuantityValue>{item.quantity}</QuantityValue>
              <QuantityButton onPress={() => attItemQuantity(item.id, quantity + 1)}>
                <Icon name="add" />
              </QuantityButton>
            </OrderQuantity>
          </OrderItemCost>
        </OrderInfo>
        <DeleteButton onPress={() => removeItem(item.id)}>
          <Icon name="delete-forever" size={24} />
        </DeleteButton>
      </OrderItem>
    );
  };

  render() {
    const { cart, navigation } = this.props;
    return (
      <Container>
        <CartList
          data={cart.data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
        />
        <Footer>
          <MainButton onPress={() => navigation.navigate('Main')}>
            <Icon name="add-shopping-cart" size={24} />
          </MainButton>
          <OrderButton onPress={() => {}}>
            <OrderButtonText>Realizar pedido</OrderButtonText>
          </OrderButton>
        </Footer>
      </Container>
    );
  }
}

const convertToBRL = (item) => {
  let subtotal = (item.price * item.quantity).toFixed(2);

  subtotal = subtotal.replace(/[.]/g, ',');

  return { ...item, subtotal };
};

const mapStateToProps = state => ({
  cart: {
    ...state.cart,
    data: state.cart.data.map(item => convertToBRL(item)),
  },
  // cart: {
  //   ...state.cart,
  //   data: state.cart.data.map(item => ({
  //     ...item,
  //     subtotal: (item.price * item.quantity).toFixed(2).replace(/,/g, '.'),
  //   })),
  // },
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
