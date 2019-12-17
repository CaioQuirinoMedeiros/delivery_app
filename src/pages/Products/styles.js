import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: {paddingVertical: 10},
  columnWrapperStyle: {justifyContent: 'space-evenly'},
})``;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px;
  width: 160px;
  background: #fff;

  shadow-opacity: 0.7;
  shadow-radius: 11px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  elevation: 8;
`;

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 10px;
`;

export const ProductTitle = styled.Text`
  color: #0b2031;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 5px 0;
`;
