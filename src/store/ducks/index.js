import { combineReducers } from 'redux'

import { toastReducer as toast } from 'react-native-redux-toast'
import { reducer as auth } from './auth'
import { reducer as cart } from './cart'

export default combineReducers({
  auth,
  cart,
  toast
})
