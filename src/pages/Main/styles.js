import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const CategoriesList = styled.FlatList.attrs({
  contentContainerStyle: {paddingVertical: 10, alignItems: 'center'},
})``;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px;
  background-color: #fff;
  elevation: 8;
`;

export const CategoryImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: gray;
`;

export const CategoryInfo = styled.View`
  height: 80px;
  margin-left: 10px;
  flex: 1;
  justify-content: space-between;
`;

export const CategoryInfoWrapper = styled.View``;

export const CategoryTitle = styled.Text`
  color: #0b2031;
  font-size: 15;
`;

export const CategoryDescription = styled.Text`
  font-size: 13px;
  color: #706e7b;
`;

export const CategoryCookTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryCookTimeText = styled.Text`
  color: #706e7b;
  font-size: 13px;
  margin-left: 5px;
`;
