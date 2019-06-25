import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { Container, Input, SubmitButton, ButtonText, LinkButton } from '../styles';

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const { navigation } = this.props;
    const { name, email, password } = this.state;

    return (
      <Container>
        <Input
          placeholder="Nome completo"
          value={name}
          onChangeText={text => this.setState({ name: text })}
          autoCorrect={false}
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
        />

        <Input
          placeholder="Seu e-mail"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          ref={el => (this.emailInput = el)}
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
          <ButtonText>Criar conta</ButtonText>
        </SubmitButton>

        <LinkButton onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>Já tenho login</ButtonText>
        </LinkButton>
      </Container>
    );
  }
}
