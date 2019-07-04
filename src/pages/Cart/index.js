/* eslint-disable max-len */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { REACT_APP_API_URL } from 'react-native-dotenv';
import { ToastActionsCreators } from 'react-native-redux-toast';

import CartTotal from '../../components/CartTotal';
import CartActions from '../../store/ducks/cart';
import { convertToBRL } from '../../services/currency';

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
  EmptyMessage,
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
    headerRight: <CartTotal />,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
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
    ).isRequired,
    removeItem: PropTypes.func.isRequired,
    displayInfo: PropTypes.func.isRequired,
    displayError: PropTypes.func.isRequired,
    attItemQuantity: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  deleteItem = (id) => {
    const { displayInfo, removeItem } = this.props;

    removeItem(id);
    displayInfo('Item exlcuído!', 1500);
  };

  goToOrder = () => {
    const { items, navigation, displayError } = this.props;

    return items.length ? navigation.navigate('Order') : displayError('Adicione items no carrinho');
  };

  renderOrderItem = ({ item }) => {
    const { attItemQuantity } = this.props;
    const { quantity } = item;

    return (
      <OrderItem>
        <ProductImage
          source={{
            uri: `${REACT_APP_API_URL}/uploads/${
              item.product.image ? item.product.image.path : 'no-image.jpg'
            }`,
          }}
        />
        <OrderInfo>
          <ProductTitle numberOfLines={1}>{item.product.name}</ProductTitle>
          <ProductSize numberOfLines={1}>{`Tamanho: ${item.size.name}`}</ProductSize>
          <ProductPrice>{item.subtotal}</ProductPrice>
        </OrderInfo>
        <OrderQuantity>
          <QuantityButton onPress={() => attItemQuantity(item.id, quantity + 1)}>
            <Icon name="add" color="#fff" />
          </QuantityButton>
          <QuantityValue>{item.quantity}</QuantityValue>
          <QuantityButton onPress={() => attItemQuantity(item.id, quantity - 1)}>
            <Icon name="remove" color="#fff" />
          </QuantityButton>
        </OrderQuantity>
        <DeleteButton onPress={() => this.deleteItem(item.id)}>
          <Icon name="delete-forever" size={24} color="#E62638" />
        </DeleteButton>
      </OrderItem>
    );
  };

  render() {
    const { navigation, items } = this.props;
    return (
      <Container>
        <CartList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
          ListEmptyComponent={(
            <OrderItem>
              <EmptyMessage>Carrinho vazio</EmptyMessage>
            </OrderItem>
)}
        />
        <Footer>
          <MainButton onPress={() => navigation.navigate('Main')}>
            <Icon name="add-shopping-cart" size={24} color="#555" />
          </MainButton>

          <OrderButton onPress={this.goToOrder}>
            <OrderButtonText>REALIZAR PEDIDO</OrderButtonText>
          </OrderButton>
        </Footer>
      </Container>
    );
  }
}

const calculateSubtotal = (item) => {
  const subtotal = convertToBRL(item.price * item.quantity);

  return { ...item, subtotal };
};

const mapStateToProps = state => ({
  items: state.cart.data.map(item => calculateSubtotal(item)),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ToastActionsCreators, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
