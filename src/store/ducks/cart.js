/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  addOrderItem: ['item'],
  removeOrderItem: ['id'],
  attOrderItemQuantity: ['quantity'],
});

export const CartTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
});

/**
 * Reducers
 */
const addItem = (state, { item }) => state.merge({ data: { ...state.data, item } });

const removeItem = (state, { id }) => state.merge({ data: state.data.filter(item => item.id !== id) });

const attItemQuantity = (state, { id, quantity }) => state.merge({
  data: state.data.map((item) => {
    if (item.id === id) item.quantity = quantity;

    return item;
  }),
});

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.ADD_ITEM_QUANTITY]: attItemQuantity,
});
