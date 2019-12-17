import React from 'react'
import { useSelector } from 'react-redux'
import { StatusBar } from 'react-native'

import { Background, Gradient } from './styles'
import headerBackground from './assets/images/header-background.png'
import fundo from './assets/images/fundo.jpg'

import createNavigator from './routes'

function App () {
  const auth = useSelector(({ auth }) => auth)

  const Routes = createNavigator(auth.signedIn)

  return (
    <>
      <StatusBar
        backgroundColor='#0B2031'
        barStyle='light-content'
        hidden={!auth.signedIn}
      />
      <Background source={auth.signedIn ? headerBackground : fundo} />
      {!auth.signedIn && <Gradient />}
      <Routes />
    </>
  )
}

export default App
