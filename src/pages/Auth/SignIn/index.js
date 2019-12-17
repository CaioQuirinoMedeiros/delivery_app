import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import logo from '../../../assets/images/logo3x.png'

import AuthActions from '../../../store/ducks/auth'

import {
  Container,
  Input,
  PasswordInput,
  EyeIcon,
  SubmitButton,
  ButtonText,
  LinkButton,
  Logo
} from '../styles'

function SignIn ({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)

  const passwordRef = useRef()

  const dispatch = useDispatch()

  function handleSignInSubmit () {
    dispatch(AuthActions.signInRequest(email, password))
  }

  return (
    <Container>
      <Logo source={logo} />

      <Input
        placeholder='Seu e-mail'
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType='email-address'
        autoCapitalize='none'
        returnKeyType='next'
        blurOnSubmit={false}
        onSubmitEditing={() => passwordRef.current.focus()}
      />

      <PasswordInput>
        <Input
          password
          placeholder='Senha secreta'
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={!passwordVisible}
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType='send'
          onSubmitEditing={handleSignInSubmit}
          ref={passwordRef}
        />
        <EyeIcon
          name={passwordVisible ? 'visibility' : 'visibility-off'}
          size={24}
          color='#222'
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </PasswordInput>

      <SubmitButton onPress={handleSignInSubmit}>
        <ButtonText>Entrar</ButtonText>
      </SubmitButton>

      <LinkButton onPress={() => navigation.navigate('SignUp')}>
        <ButtonText>Criar conta gratuita</ButtonText>
      </LinkButton>
    </Container>
  )
}

export default SignIn
