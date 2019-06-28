import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 15px;

  background: rebeccapurple;
`;

export const CategoriesList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 5 },
})`
  background: yellow;
  border-width: 2px;
  border-color: blue;
`;

export const Category = styled.TouchableOpacity.attrs({
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

export const CategoryImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;

  background: blue;
  border-width: 1px;
  border-color: black;
`;

export const CategoryInfo = styled.View`
  margin-left: 10px;
  flex: 1;

  border-width: 1px;
  border-color: red;
`;

export const CategoryTitle = styled.Text`
  color: #0b2031;

  background: green;
`;

export const CategoryDescription = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin: 3px 0;

  background: pink;
`;

export const CategoryCookTime = styled.View`
  flex-direction: row;
  align-items: center;

  background: peru;
`;

export const CategoryCookTimeText = styled.Text`
  color: #706e7b;
  font-size: 13px;
  margin-left: 5px;

  background: #fff;
  align-self: flex-end;
`;
