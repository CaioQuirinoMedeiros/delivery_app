import styled from 'styled-components';

export const Container = styled.View`
  background: #444;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Input = styled.TextInput`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background: #f15454;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const LinkButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
