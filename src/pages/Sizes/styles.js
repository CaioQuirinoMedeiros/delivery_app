import styled from 'styled-components'

import ImageComponent from '../../components/Image'

export const Container = styled.View`
  height: 100%;
  width: 100%;
`

export const SizesList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 10 },
  columnWrapperStyle: { justifyContent: 'space-evenly' }
})``

export const Size = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 12px;
  width: 160px;
  background: #fff;
  elevation: 8;
`

export const SizeImage = styled(ImageComponent).attrs({
  resizeMode: 'center',
  size: 110
})``

export const SizeTitle = styled.Text`
  color: #0b2031;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`

export const SizePrice = styled.Text`
  color: #706e7b;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`
