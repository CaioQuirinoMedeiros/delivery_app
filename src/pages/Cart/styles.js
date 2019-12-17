import styled from 'styled-components'

import ImageComponent from '../../components/Image'

export const Container = styled.View`
  height: 100%;
  width: 100%;
`

export const CartList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 10, alignItems: 'center' }
})``

export const OrderItem = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 15px 12px;
  background: #fff;
  elevation: 8;
`

export const ProductImage = styled(ImageComponent).attrs({ size: 80 })``

export const OrderInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  height: 80px;
  justify-content: space-between;
`

export const ProductTitle = styled.Text`
  color: #0b2031;
  font-size: 15px;
`

export const ProductSize = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin-bottom: 10px;
`

export const ProductPrice = styled.Text`
  color: #0b2031;
  font-size: 18px;
  font-weight: bold;
`

export const OrderQuantity = styled.View`
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  height: 80px;
`

export const QuantityValue = styled.Text`
  color: #0b2031;
  width: 20px;
  text-align: center;
  font-size: 15px;
`

export const QuantityButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: #0b2031;
  align-items: center;
  justify-content: center;
`

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`

export const Footer = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`

export const MainButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  background: #ccc;
`

export const OrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: 40px;
  padding: 0 30px;
  border-radius: 20px;
  background: #e62638;
  align-items: center;
  justify-content: center;
`

export const OrderButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`

export const EmptyMessage = styled.Text`
  font-size: 24px;
  width: 100%;
  text-align: center;
  color: #706e7b;
`
