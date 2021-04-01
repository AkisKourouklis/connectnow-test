import update from 'immutability-helper'
import { AnyAction } from 'redux'
import { LOAD_USERS } from '../types'
import { IUserState } from '../../types'

const initialState: IUserState = {
  users: null,
}

const load = (state: IUserState, action: AnyAction): IUserState => {
  return update(state, {
    users: { $set: action.payload.users },
  })
}

const reducer = (state: IUserState = initialState, action: AnyAction): IUserState => {
  switch (action.type) {
    case LOAD_USERS:
      return load(state, action)
    default:
      return state
  }
}

export default reducer
