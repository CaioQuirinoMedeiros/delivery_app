/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import { call, put, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';
import AuthActions from '../ducks/auth';

export function* init() {
  // yield put(AuthActions.signOut());
  const token = yield call([AsyncStorage, 'getItem'], '@delivery:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    if (!response.data.roles.includes('client')) {
      yield put(ToastActionsCreators.displayError('Apenas clientes pode entrar aqui'));
      yield put(AuthActions.signInFailure());

      return;
    }

    yield call([AsyncStorage, 'setItem'], '@delivery:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(ToastActionsCreators.displayInfo('Bem-vindo!'));
  } catch (err) {
    console.log(err);
    yield put(AuthActions.signInFailure());
    yield put(ToastActionsCreators.displayError('Credenciais inválidas'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}

export function* signUp({
  name, email, password, password_confirmation,
}) {
  try {
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
      password_confirmation,
    });

    yield call([AsyncStorage, 'setItem'], '@delivery:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(ToastActionsCreators.displayInfo('Bem-vindo!'));
  } catch (err) {
    console.log(err);
    yield put(AuthActions.signInFailure());
    yield put(ToastActionsCreators.displayError('Não foi possível criar o cadastro'));
  }
}

export function* getPermissions() {
  const signedIn = yield yield select(state => state.auth.signedIn);

  if (!signedIn) {
    return;
  }

  const response = yield call(api.get, 'permissions');

  const { roles, permissions } = response.data;

  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
