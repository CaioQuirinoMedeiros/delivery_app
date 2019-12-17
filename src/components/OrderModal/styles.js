import styled from 'styled-components';

export const ModalContainer = styled.Modal``;

export const Background = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
`;

export const OrderItemsList = styled.FlatList.attrs({
  contentContainerStyle: {paddingVertical: 10, alignItems: 'center'},
})`
  background: transparent;
`;

export const OrderItem = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 15px 12px;
  background: #fff;

  shadow-opacity: 0.7;
  shadow-radius: 11px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  elevation: 8;
`;

export const ProductImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 10px;
`;

export const OrderInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  height: 65px;
  justify-content: space-evenly;
`;

export const ProductTitle = styled.Text`
  color: #0b2031;
  font-size: 15px;
`;

export const ProductDetail = styled.Text`
  font-size: 13px;
  color: #706e7b;
`;

export const ItemSubtotal = styled.Text`
  color: #0b2031;
  font-size: 18px;
  font-weight: bold;
`;

export const OrderDetails = styled.View`
  width: 90%;
  margin: 10px 0;
  align-self: center;
  border-radius: 10px;
  padding: 5px 15px;
  background: #fff;

  shadow-opacity: 0.7;
  shadow-radius: 11px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  elevation: 8;
`;

export const OrderDetailsHeader = styled.View`
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  hitSlop: {
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
  },
})`
  height: 28px;
  width: 28px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background: #e62638;
`;

export const OrderDetail = styled.View`
  margin: 5px 0;
`;

export const OrderDetailTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
`;

export const OrderDetailText = styled.Text`
  font-size: 13px;
  color: #706e7b;
`;
