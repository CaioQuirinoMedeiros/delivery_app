import styled from 'styled-components';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const CategoriesList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 10, alignItems: 'center' },
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

  shadow-opacity: 0.7;
  shadow-radius: 11px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  elevation: 8;
`;

export const CategoryImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: gray;
`;

export const CategoryInfo = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const CategoryTitle = styled.Text`
  color: #0b2031;
  font-size: 15;
`;

export const CategoryDescription = styled.Text`
  font-size: 13px;
  color: #888;
  margin: 3px 0;
`;

export const CategoryCookTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryCookTimeText = styled.Text`
  color: #888;
  font-size: 13px;
  margin-left: 5px;
`;
