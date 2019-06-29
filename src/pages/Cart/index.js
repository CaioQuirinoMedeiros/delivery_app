import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
        <ProductImage
          source={{ uri: 'https://optepizza.com.br/wp-content/uploads/opte-pizza.png' }}
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
        <DeleteButton onPress={() => removeItem(item.id)}>
          <Icon name="delete-forever" size={24} color="#E62638" />
        </DeleteButton>
      </OrderItem>
    );
  };

  render() {
    const { items, navigation } = this.props;
    return (
      <Container>
        <CartList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
        />
        <Footer>
          <MainButton onPress={() => navigation.navigate('Main')}>
            <Icon name="add-shopping-cart" size={24} color="#555" />
          </MainButton>
          <OrderButton onPress={() => navigation.navigate('Order')}>
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

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
