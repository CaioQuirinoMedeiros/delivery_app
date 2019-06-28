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

    yield call([AsyncStorage, 'setItem'], '@delivery:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(ToastActionsCreators.displayInfo('Login realizado com sucesso'));
  } catch (err) {
    console.log(err);
    yield put(ToastActionsCreators.displayError('Credenciais inválidas'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Erro ao criar cadastro'));
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
