import { persistReducer } from 'redux-persist'

import persistConfig from '../config/redux-persist-config'

export default reducers => {
  const persistedReducer = persistReducer(persistConfig, reducers)

  return persistedReducer
}
