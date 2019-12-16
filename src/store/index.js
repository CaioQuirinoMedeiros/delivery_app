/* eslint-disable import/no-cycle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddeware = createSagaMiddleware();

const middlewares = [sagaMiddeware];

const store = createStore(rootReducer(), applyMiddleware(...middlewares));

sagaMiddeware.run(rootSaga);

export default store;
