import React, { Component } from 'react';

import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { Container, Input, SubmitButton, ButtonText, LinkButton } from '../styles';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Container>
        <Input
          placeholder="Seu e-mail"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
        />

        <Input
          placeholder="Senha secreta"
          value={password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          ref={el => (this.passwordInput = el)}
        />

        <SubmitButton onPress={() => {}}>
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>

        <LinkButton onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Criar conta gratuita</ButtonText>
        </LinkButton>
      </Container>
    );
  }
}
