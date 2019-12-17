import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

export const Wrapper = styled.View`
  flex: 1;
  background: #f7f7f7;
`

export const Background = styled.Image`
  width: 100%;
  position: absolute;
`

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.80)', 'rgba(0,0,0,0.9)']
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
`
