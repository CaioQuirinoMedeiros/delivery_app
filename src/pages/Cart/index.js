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
          price: PropTypes.number,
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
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {}

  renderOrderItem = ({ item }) => {
    const { removeItem } = this.props;

    return (
      <OrderItem>
        <ProductImage source={{ uri: item.product.image.url }} />
        <OrderInfo>
          <ProductTitle>{item.product.name}</ProductTitle>
          <ProductSize>{item.size.name}</ProductSize>
          <OrderItemCost>
            <ProductPrice>{item.price * item.quantity}</ProductPrice>
            <OrderQuantity>{item.quantity}</OrderQuantity>
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
