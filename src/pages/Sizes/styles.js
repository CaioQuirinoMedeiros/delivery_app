import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const SizesList = styled.FlatList.attrs({
  contentContainerStyle: {paddingVertical: 10},
  columnWrapperStyle: {justifyContent: 'space-evenly'},
})``;

export const Size = styled.TouchableOpacity.attrs({
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

export const SizeImage = styled.Image.attrs({
  resizeMode: 'center',
})`
  width: 110px;
  height: 110px;
  border-radius: 10px;
`;

export const SizeTitle = styled.Text`
  color: #0b2031;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;

export const SizePrice = styled.Text`
  color: #706e7b;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;
