/* eslint-disable max-len */
import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

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

function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const dispatch = useDispatch();

  function handleSignUpSubmit() {
    dispatch(
      AuthActions(signUpRequest(name, email, password, passwordConfirmation)),
    );
  }

  function renderEyeIcon() {
    return (
      <EyeIcon
        name={passwordVisible ? 'visibility' : 'visibility-off'}
        size={24}
        color="#222"
        onPress={() => setPasswordVisible(!passwordVisible)}
      />
    );
  }

  return (
    <Container>
      <Logo source={logo} />

      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={text => setName(text)}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => emailRef.current.focus()}
      />

      <Input
        placeholder="Seu e-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => passwordRef.current.focus()}
        ref={emailRef}
      />

      <PasswordInput>
        <Input
          password
          placeholder="Senha secreta"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmationRef.current.focus()}
          ref={passwordRef}
        />
        {renderEyeIcon()}
      </PasswordInput>

      <PasswordInput>
        <Input
          password
          placeholder="Senha secreta - confirmação"
          value={passwordConfirmation}
          onChangeText={text => setPasswordConfirmation(text)}
          secureTextEntry={passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          onSubmitEditing={handleSignUpSubmit}
          ref={passwordConfirmationRef}
        />
        {renderEyeIcon()}
      </PasswordInput>

      <SubmitButton onPress={handleSignUpSubmit}>
        <ButtonText>Criar conta</ButtonText>
      </SubmitButton>

      <LinkButton onPress={() => navigation.navigate('SignIn')}>
        <ButtonText>Já tenho login</ButtonText>
      </LinkButton>
    </Container>
  );
}

export default SignUp;
