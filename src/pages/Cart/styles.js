import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 15px;

  background: rebeccapurple;
`;

export const CartList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 5 },
})`
  background: yellow;
  border-width: 2px;
  border-color: blue;
`;

export const OrderItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px;

  background: gray;
  border-width: 1px;
  border-color: red;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;

  background: blue;
  border-width: 1px;
  border-color: black;
`;

export const OrderInfo = styled.View`
  margin-left: 10px;
  flex: 1;

  border-width: 1px;
  border-color: red;
`;

export const ProductTitle = styled.Text`
  color: #0b2031;

  background: green;
`;

export const ProductSize = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin: 3px 0;

  background: pink;
`;

export const OrderItemCost = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: peru;
`;

export const ProductPrice = styled.Text`
  color: #0b2031;
  font-size: 15px;
`;

export const OrderQuantity = styled.Text`
  color: #0b2031;
  font-size: 15px;
`;

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;

  background: red;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;

  background: orange;
  border-width: 1px;
  border-color: blue;
`;

export const MainButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;

  background: #293def;
`;

export const OrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 36px;
  padding: 0 30px;
  border-radius: 18px;
  background: red;
  align-items: center;
  justify-content: center;
`;

export const OrderButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;
