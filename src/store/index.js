/* eslint-disable import/no-cycle */
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import createStore from './create-store'
import persistReducers from './persist-reducers'

import reducers from './ducks'
import sagas from './sagas'

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddeware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddeware]

const store = createStore(persistReducers(reducers), middlewares)

const persistor = persistStore(store)

sagaMiddeware.run(sagas)

export { store, persistor }
