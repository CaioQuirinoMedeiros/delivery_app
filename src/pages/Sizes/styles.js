import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 15px 0;

  background: rebeccapurple;
`;

export const SizesList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 5 },
  columnWrapperStyle: { justifyContent: 'space-evenly' },
})`
  background: yellow;
  border-width: 2px;
  border-color: blue;
`;

export const Size = styled.TouchableOpacity.attrs({
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

export const SizeImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 10px;

  background: blue;
  border-width: 1px;
  border-color: black;
`;

export const SizeTitle = styled.Text`
  color: #0b2031;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;

  background: green;
`;

export const SizePrice = styled.Text`
  color: #706e7b;
  font-size: 16px;
  text-align: center;
  margin-top: 5px;

  background: #fff;
`;
