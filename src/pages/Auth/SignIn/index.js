import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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

class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    passwordSecure: true,
  };

  handleSignInSubmit = () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { navigation } = this.props;
    const { email, password, passwordSecure } = this.state;

    return (
      <Container>
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
            returnKeyType="send"
            onSubmitEditing={this.handleSignInSubmit}
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

        <SubmitButton onPress={this.handleSignInSubmit}>
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>

        <LinkButton onPress={() => navigation.navigate('SignUp')}>
          <ButtonText>Criar conta gratuita</ButtonText>
        </LinkButton>
      </Container>
    );
  }
}

const masStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  masStateToProps,
  mapDispatchToProps,
)(SignIn);
