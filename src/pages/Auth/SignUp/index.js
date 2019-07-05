/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../../../assets/images/logo3x.png';

import AuthActions from '../../../store/ducks/auth';

import {
  Container,
  Input,
  PasswordInput,
  EyeIcon,
  SubmitButton,
  ButtonText,
  LinkButton,
  Logo,
} from '../styles';

class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    passwordSecure: true,
    passwordConfirmation: '',
    passwordConfirmationSecure: true,
  };

  handleSignUpSubmit = async () => {
    const { signUpRequest } = this.props;
    const {
      name, email, password, passwordConfirmation,
    } = this.state;

    signUpRequest(name, email, password, passwordConfirmation);
  };

  render() {
    const { navigation } = this.props;
    const {
      name,
      email,
      password,
      passwordConfirmation,
      passwordSecure,
      passwordConfirmationSecure,
    } = this.state;

    return (
      <Container>
        <Logo source={logo} />

        <Input
          placeholder="Nome completo"
          value={name}
          onChangeText={text => this.setState({ name: text })}
          autoCorrect={false}
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
          ref={(el) => {
            this.emailInput = el;
          }}
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

        <PasswordInput>
          <Input
            password
            placeholder="Senha secreta - confirmação"
            value={passwordConfirmation}
            onChangeText={text => this.setState({ passwordConfirmation: text })}
            secureTextEntry={passwordConfirmationSecure}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="send"
            onSubmitEditing={this.handleSignUpSubmit}
            ref={(el) => {
              this.passwordConfirmationInput = el;
            }}
          />
          <EyeIcon
            name={passwordConfirmationSecure ? 'visibility-off' : 'visibility'}
            size={24}
            color="#222"
            onPress={() => this.setState({ passwordConfirmationSecure: !passwordConfirmationSecure })
            }
          />
        </PasswordInput>

        <SubmitButton onPress={this.handleSignUpSubmit}>
          <ButtonText>Criar conta</ButtonText>
        </SubmitButton>

        <LinkButton onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>Já tenho login</ButtonText>
        </LinkButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
