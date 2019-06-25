import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as categories } from './categories';

export default () => combineReducers({
  auth,
  categories,
  toast,
});