import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { convertToBRL } from '../../services/currency';

import {
  ModalContainer,
  OrderItemsList,
  OrderItem,
  ProductImage,
  OrderInfo,
  ProductTitle,
  ProductDetail,
  ItemSubtotal,
  OrderDetails,
  OrderDetailsHeader,
  CloseButton,
  OrderDetail,
  OrderDetailTitle,
  OrderDetailText,
  Background,
} from './styles';

const OrderModal = ({ order, closeOrder }) => {
  const items = order.items.map(item => ({
    ...item,
    subtotal: convertToBRL(Number(item.subtotal)),
    product_size: { ...item.product_size, price: convertToBRL(Number(item.product_size.price)) },
  }));

  return (
    <ModalContainer visible={!!order} transparent>
      <Background>
        <OrderDetails>
          <OrderDetailsHeader>
            <ItemSubtotal>{order.total}</ItemSubtotal>
            <CloseButton onPress={closeOrder}>
              <Icon name="clear" size={20} color="#fff" />
            </CloseButton>
          </OrderDetailsHeader>
          <OrderDetail>
            <OrderDetailTitle>Observações</OrderDetailTitle>
            <OrderDetailText>{order.observations}</OrderDetailText>
          </OrderDetail>
          <OrderDetail>
            <OrderDetailTitle>Endereço</OrderDetailTitle>
            <OrderDetailText>{`Bairro: ${order.district}`}</OrderDetailText>
            <OrderDetailText>{`Rua: ${order.street}`}</OrderDetailText>
            <OrderDetailText>{`Número: ${order.number}`}</OrderDetailText>
          </OrderDetail>
          <OrderDetail>
            <OrderDetailTitle>Data</OrderDetailTitle>
            <OrderDetailText>{order.created_at}</OrderDetailText>
          </OrderDetail>
        </OrderDetails>
        <OrderItemsList
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <OrderItem>
              <ProductImage
                source={{ uri: 'https://optepizza.com.br/wp-content/uploads/opte-pizza.png' }}
              />
              <OrderInfo>
                <ProductTitle>{item.product_size.product.name}</ProductTitle>
                <ProductDetail>{`Price: ${item.product_size.price}`}</ProductDetail>
                <ProductDetail>{`Quantity: ${item.quantity}`}</ProductDetail>
              </OrderInfo>
              <ItemSubtotal>{item.subtotal}</ItemSubtotal>
            </OrderItem>
          )}
        />
      </Background>
    </ModalContainer>
  );
};

OrderModal.propTypes = {
  order: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        subtotal: PropTypes.string,
        product_size: PropTypes.shape({
          price: PropTypes.string,
          name: PropTypes.string,
        }),
      }),
    ),
    total: PropTypes.string,
    created_at: PropTypes.string,
    observations: PropTypes.string,
    district: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  closeOrder: PropTypes.func.isRequired,
};

export default OrderModal;
