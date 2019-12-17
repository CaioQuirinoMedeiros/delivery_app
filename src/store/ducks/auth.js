import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Actions & Types
 */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  signInFailure: null,
  signOut: null,
  signUpRequest: ['name', 'email', 'password', 'passwordConfirmation']
})

export const AuthTypes = Types
export default Creators

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  fetching: false,
  signedIn: false,
  token: null,
  roles: []
})

/**
 * Reducers
 */
const request = state => state.merge({ fetching: true })

const success = (state, { token }) =>
  state.merge({ signedIn: true, token, fetching: false })

const failure = state => state.merge({ fetching: false })

const logout = state => state.merge({ signedIn: false, token: null })

/**
 * Reducers to types
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
  [Types.SIGN_OUT]: logout
})
