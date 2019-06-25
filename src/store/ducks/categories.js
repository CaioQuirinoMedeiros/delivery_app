import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  getCategoriesRequest: null,
  getCategoriesSuccess: ['data'],
  getCategoriesFailure: null,
});

export const CategoriesTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  error: false,
});

/**
 * Reducers
 */
const getSuccess = (state, { data }) => state.merge({ data, error: false });

const getFailure = state => state.merge({ error: true });

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_SUCCESS]: getSuccess,
  [Types.GET_CATEGORIES_FAILURE]: getFailure,
});
