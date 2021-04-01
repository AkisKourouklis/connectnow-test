import update from 'immutability-helper'
import { AnyAction } from 'redux'
import { AUTH_FAIL, AUTH_LOGOUT, AUTH_REGISTER, AUTH_START, AUTH_SUCCESS } from '../types'
import { AuthState } from '../../types/auth'

const initialState: AuthState = {
  isLoading: false,
  token: '',
  isAuth: false,
  user: null,
}

const authFail = (state: AuthState): AuthState => {
  return update(state, {
    isLoading: { $set: false },
  })
}
const authStart = (state: AuthState): AuthState => {
  return update(state, {
    isLoading: { $set: true },
  })
}
const authSuccess = (state: AuthState, action: AnyAction): AuthState => {
  return update(state, {
    isLoading: { $set: false },
    isAuth: { $set: true },
    token: { $set: action.payload.jwt },
    user: { $set: action.payload.user },
  })
}
const authLogout = (state: AuthState): AuthState => {
  return update(state, {
    isLoading: { $set: false },
    isAuth: { $set: false },
    token: { $set: '' },
    user: { $set: null },
  })
}

const authRegister = (state: AuthState): AuthState => {
  return update(state, {
    isLoading: { $set: false },
  })
}

const reducer = (state: AuthState = initialState, action: AnyAction): unknown => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state)
    case AUTH_FAIL:
      return authFail(state)
    case AUTH_SUCCESS:
      return authSuccess(state, action)
    case AUTH_LOGOUT:
      return authLogout(state)
    case AUTH_REGISTER:
      return authRegister(state)
    default:
      return state
  }
}

export default reducer
