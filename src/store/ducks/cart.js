/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['id'],
  attItemQuantity: ['id', 'quantity'],
});

export const CartTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [
    {
      id: 1,
      price: '25',
      product: {
        name: 'Pizza Calabresa',
        image: { url: 'asdsa' },
      },
      size: { name: 'Média' },
      quantity: 1,
    },
    {
      id: 2,
      price: '28',
      product: {
        name: 'Pizza Mussarela',
        image: { url: 'asd' },
      },
      size: { name: 'Grande' },
      quantity: 3,
    },
    {
      id: 3,
      price: '30',
      product: {
        name: 'Pizza Bacon',
        image: { url: 'asdas' },
      },
      size: { name: 'Média' },
      quantity: 2,
    },
  ],
});

/**
 * Reducers
 */
const addItem = (state, { item }) => state.merge({ data: [...state.data, item] });

const removeItem = (state, { id }) => state.merge({ data: state.data.filter(item => item.id !== id) });

const attItemQuantity = (state, { id, quantity }) => state.merge({
  data: state.data.map((item) => {
    if (item.id === id && quantity > 0 && quantity < 31) {
      return { ...item, quantity };
    }
    return item;
  }),
});

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.ATT_ITEM_QUANTITY]: attItemQuantity,
});
