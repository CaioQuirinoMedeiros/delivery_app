import AsyncStorage from '@react-native-community/async-storage'
import Immutable from 'seamless-immutable'

const convertToJs = state =>
  state.asMutable ? state.asMutable({ deep: true }) : state

const immutableTransform = {
  out: state => {
    return Immutable(state)
  },
  in: raw => {
    return convertToJs(raw)
  }
}

export default {
  key: 'pizza-delivery',
  storage: AsyncStorage,
  whitelist: ['auth', 'cart'],
  transforms: [immutableTransform]
}
