import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/logo3x.png';

import {
  Container,
  Input,
  PasswordInput,
  EyeIcon,
  SubmitButton,
  ButtonText,
  LinkButton,
  Logo,
  Gradient,
} from '../styles';

export default class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
    passwordSecure: true,
  };

  render() {
    const { navigation } = this.props;
    const { email, password, passwordSecure } = this.state;

    return (
      <Container>
        <Gradient />
        <Logo source={logo} />
        <Input
          placeholder="Seu e-mail"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
        />

        <PasswordInput>
          <Input
            password
            placeholder="Senha secreta"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry={passwordSecure}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordConfirmationInput.focus()}
            ref={(el) => {
              this.passwordInput = el;
            }}
          />
          <EyeIcon
            name={passwordSecure ? 'visibility-off' : 'visibility'}
            size={24}
            color="#222"
            onPress={() => this.setState({ passwordSecure: !passwordSecure })}
          />
        </PasswordInput>

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
