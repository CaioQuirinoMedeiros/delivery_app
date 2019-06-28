import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 15px 0;

  background: rebeccapurple;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 5 },
  columnWrapperStyle: { justifyContent: 'space-evenly' },
})`
  background: yellow;
  border-width: 2px;
  border-color: blue;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px;
  width: 160px;

  background: gray;
  border-width: 1px;
  border-color: red;
`;

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 10px;

  background: blue;
  border-width: 1px;
  border-color: black;
`;

export const ProductTitle = styled.Text`
  color: #0b2031;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;

  background: green;
`;
