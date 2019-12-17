/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const Container = styled.View`
  height: 100%;
  width: 100%;
`

export const OrdersList = styled.FlatList.attrs({
  contentContainerStyle: { paddingVertical: 10, alignItems: 'center' }
})``

export const OrderItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;
  padding: 15px 20px;
  background: #fff;
  elevation: 8;
`

export const OrderInfo = styled.View`
  flex: 1;
  height: 80px;
  justify-content: space-between;
`

export const OrderNumber = styled.Text`
  color: #0b2031;
  font-size: 15px;
`

export const OrderElapsedTime = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin-bottom: 10px;
`

export const OrderTotal = styled.Text`
  color: #0b2031;
  font-size: 18px;
  font-weight: bold;
`

export const OrderStatus = styled.Text`
  align-self: flex-end;
  font-weight: bold;
  color: ${props =>
    props.status === 'pendente'
      ? 'orange'
      : props.status === 'cancelado'
      ? 'red'
      : 'green'};
`

export const Footer = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`

export const LogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  height: 40px;
  padding: 0 30px;
  border-radius: 20px;
  background: #e62638;
  align-items: center;
  justify-content: center;
`

export const LogoutButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`

export const EmptyMessage = styled.Text`
  font-size: 22px;
  width: 100%;
  text-align: center;
  color: #706e7b;
`
