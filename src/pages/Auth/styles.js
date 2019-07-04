import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
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

export const SubmitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
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
