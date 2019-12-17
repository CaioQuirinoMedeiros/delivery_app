import styled from 'styled-components'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${props => `${props.headerHeight}px`};
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  hitSlop: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
})`
  height: 36px;
  width: 36px;
  margin: 0 15px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.red ? '#E62638' : 'transparent')};
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  flex: 1;
`

export const CartItems = styled.Text`
  position: absolute;
  top: -3px;
  right: -3px;
  background: orange;
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  text-align: center;
  color: #fff;
  font-size: 12px;
`
