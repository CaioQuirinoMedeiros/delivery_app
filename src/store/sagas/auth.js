import { call, put, select } from 'redux-saga/effects'
import { ToastActionsCreators } from 'react-native-redux-toast'

import api from '../../services/api'
import AuthActions from '../ducks/auth'

export function * signIn ({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password })

    if (!response.data.roles.includes('client')) {
      yield put(
        ToastActionsCreators.displayError('Apenas clientes pode entrar aqui')
      )
      yield put(AuthActions.signInFailure())

      return
    }

    yield put(AuthActions.signInSuccess(response.data.token))

    yield put(ToastActionsCreators.displayInfo('Bem-vindo!'))
  } catch (err) {
    yield put(AuthActions.signInFailure())
    yield put(ToastActionsCreators.displayError('Credenciais inválidas'))
  }
}

export function * signUp ({ name, email, password, passwordConfirmation }) {
  try {
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation
    })

    yield put(AuthActions.signInSuccess(response.data.token))

    yield put(ToastActionsCreators.displayInfo('Bem-vindo!'))
  } catch (err) {
    yield put(AuthActions.signInFailure())
    yield put(
      ToastActionsCreators.displayError('Não foi possível criar o cadastro')
    )
  }
}

export function * getPermissions () {
  const signedIn = yield select(state => state.auth.signedIn)

  if (!signedIn) {
    return
  }

  const response = yield call(api.get, 'permissions')

  const { roles, permissions } = response.data

  yield put(AuthActions.getPermissionsSuccess(roles, permissions))
}
