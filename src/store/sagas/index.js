/* eslint-disable import/no-cycle */
import { all, takeLatest } from 'redux-saga/effects'

import { AuthTypes } from '../ducks/auth'
import { signIn, signUp } from './auth'

export default function * rootSaga () {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp)
  ])
}
