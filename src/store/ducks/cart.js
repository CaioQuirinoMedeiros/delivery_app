import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  addItem: ['item'],
  increaseItemQuantity: ['id'],
  decreaseItemQuantity: ['id'],
  removeItem: ['id'],
  clearItems: null
})

export const CartTypes = Types
export default Creators

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: []
})

/**
 * Reducers
 */
const addItem = (state, { item }) =>
  state.merge({ data: [...state.data, { ...item, quantity: 1 }] })

const increaseQuantity = (state, { id }) =>
  state.merge({
    data: state.data.map(item =>
      item.id === id && item.quantity < 31
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  })

const decreaseQuantity = (state, { id }) =>
  state.merge({
    data: state.data.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  })

const removeItem = (state, { id }) =>
  state.merge({ data: state.data.filter(item => item.id !== id) })

const clear = state => INITIAL_STATE

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.INCREASE_ITEM_QUANTITY]: increaseQuantity,
  [Types.DECREASE_ITEM_QUANTITY]: decreaseQuantity,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.CLEAR_ITEMS]: clear
})
