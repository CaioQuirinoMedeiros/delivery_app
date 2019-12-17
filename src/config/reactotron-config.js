import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'pizza-delivery'
  })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect()

  tron.clear()

  console.tron = tron
} else {
  const noop = () => undefined
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    warn: noop,
    image: noop,
    reportError: noop
  }
}
