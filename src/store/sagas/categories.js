/* eslint-disable import/no-cycle */
import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';
import CategoriesActions from '../ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    console.log(err);
    yield put(ToastActionsCreators.displayError('Erro ao buscar as categorias'));
  }
}
