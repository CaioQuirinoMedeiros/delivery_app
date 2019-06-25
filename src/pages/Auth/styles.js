import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import background from '../../assets/images/fundo.jpg';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.80)', 'rgba(0,0,0,0.9)'],
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  padding-right: ${props => (props.password ? '50px' : '0')};
`;

export const PasswordInput = styled.View`
  width: 100%;
  position: relative;
`;

export const EyeIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 12px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background: #f15454;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
`;

export const LinkButton = styled.TouchableOpacity`
  font-size: 15px;
  width: 100%;
  padding: 10px 0;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 25px;
`;
