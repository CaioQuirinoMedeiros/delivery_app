import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Toast } from 'react-native-redux-toast'

import './config/reactotron-config'
import { store, persistor } from './store'

import App from './App'

function Root () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <App />
          <Toast
            messageStyle={{ color: '#fff' }}
            containerStyle={{ backgroundColor: '#548a56' }}
          />
        </>
      </PersistGate>
    </Provider>
  )
}
export default Root
