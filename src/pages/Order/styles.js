import styled from 'styled-components';
import {Platform} from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'iOS' ? 'padding' : '',
})`
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const InputWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  flex: ${props => (props.placeholder === 'Rua' ? 5 : 1)};
  border-radius: 10px;
  padding: 15px;
  margin: 5px 0;
  margin-right: ${props => (props.placeholder === 'Rua' ? '5px' : 0)};
  background: #fff;

  shadow-opacity: 0.7;
  shadow-radius: 11px;
  shadow-color: #000;
  shadow-offset: 10px 10px;
  elevation: 8;
`;

export const SendOrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-self: flex-end;
  height: 40px;
  margin-top: 20px;
  padding: 0 30px;
  border-radius: 20px;
  background: #e62638;
  align-items: center;
  justify-content: center;
`;

export const SendOrderButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
