import { CLEAR_ERROR, CREATE_ERROR } from '../types'
import { AnyAction, Dispatch } from 'redux'
import { INotification } from '../../types/notification'

export const createNewError = ({ message, description, type }: INotification): AnyAction => ({
  type: CREATE_ERROR,
  payload: {
    message,
    description,
    type,
  },
})

export const clearNewError = (): AnyAction => ({
  type: CLEAR_ERROR,
})

export const createError = ({ message, description, type }: INotification) => {
  return (dispatch: Dispatch): void => {
    dispatch(createNewError({ message, description, type }))
  }
}

export const clearError = () => {
  return (dispatch: Dispatch): void => {
    dispatch(clearNewError())
  }
}
