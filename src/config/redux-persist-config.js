import AsyncStorage from '@react-native-community/async-storage'
import Immutable from 'seamless-immutable'

// change this Immutable object into a JS object
const convertToJs = state =>
  state.asMutable ? state.asMutable({ deep: true }) : state

// optionally convert this object into a JS object if it is Immutable

// convert this JS object into an Immutable object
const toImmutable = raw => Immutable(raw)

// the transform interface that redux-persist is expecting
const immutableTransform = {
  out: state => {
    // console.log({ retrieving: state })
    return toImmutable(state)
  },
  in: raw => {
    // console.log({ storing: raw })
    return convertToJs(raw)
  }
}

export default {
  key: 'pizza-delivery',
  storage: AsyncStorage,
  whitelist: ['auth'],
  transforms: [immutableTransform]
}
