/* eslint-disable import/no-cycle */
import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { signIn, signOut, init } from './auth';

import { CategoriesTypes } from '../ducks/categories';
import { getCategories } from './categories';

export default function* rootSaga() {
  return yield all([
    init(),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
  ]);
}
