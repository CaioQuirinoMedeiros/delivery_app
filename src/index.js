import React from 'react';
import { Provider } from 'react-redux';

import { Toast } from 'react-native-redux-toast';

import App from './App';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <>
      <App />
      <Toast />
    </>
  </Provider>
);

export default Root;
