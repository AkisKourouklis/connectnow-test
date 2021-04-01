import { LOAD_USERS } from '../types'
import { AnyAction, Dispatch } from 'redux'
import { IUser } from '../../types'

export const load = (users: IUser[]): AnyAction => ({
  type: LOAD_USERS,
  payload: {
    users,
  },
})

export const loadUsers = (users: IUser[]) => {
  return (dispatch: Dispatch): void => {
    dispatch(load(users))
  }
}
