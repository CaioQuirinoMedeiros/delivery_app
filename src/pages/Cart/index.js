import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import PropTypes from 'prop-types';

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
} from './styles';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  static propTypes = {};

  state = {
    orderItems: [
      {
        id: 1,
        title: 'Pizza calabresa',
        size: 'Tamanho média',
        price: 'R$19,00',
      },
      {
        id: 2,
        title: 'Pizza calabresa',
        size: 'Tamanho média',
        price: 'R$19,00',
      },
      {
        id: 3,
        title: 'Pizza calabresa',
        size: 'Tamanho média',
        price: 'R$19,00',
      },
      {
        id: 4,
        title: 'Pizza calabresa',
        size: 'Tamanho média',
        price: 'R$19,00',
      },
    ],
  };

  componentDidMount() {}

  renderOrderItem = ({ item }) => (
    <OrderItem>
      <ProductImage source={{ uri: 'sdas' }} />
      <OrderInfo>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductSize>{item.size}</ProductSize>
        <OrderItemCost>
          <ProductPrice>{item.price}</ProductPrice>
          <OrderQuantity>{item.price}</OrderQuantity>
        </OrderItemCost>
      </OrderInfo>
      <DeleteButton onPress={() => {}}>
        <Icon name="delete-forever" size={24} />
      </DeleteButton>
    </OrderItem>
  );

  render() {
    const { orderItems } = this.state;
    return (
      <Container>
        <CartList
          data={orderItems}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderOrderItem}
        />
      </Container>
    );
  }
}

export default Cart;
