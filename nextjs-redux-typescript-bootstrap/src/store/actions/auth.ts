import axios from 'axios'
import { v4 } from 'uuid'
import { apiUrl } from '../../config/vars'
import { AUTH_FAIL, AUTH_LOGOUT, AUTH_REGISTER, AUTH_START, AUTH_SUCCESS } from '../types'
import { createError as createServerError } from '../../utils/error'
import { createError } from './error'
import { AnyAction, Dispatch } from 'redux'
import { IRegister, IUser } from '../../types/auth'

const authStart = (): AnyAction => ({
  type: AUTH_START,
})

const authSuccess = ({ jwt, user }: IUser): AnyAction => ({
  type: AUTH_SUCCESS,
  payload: {
    jwt,
    user,
  },
})

const authError = (): AnyAction => ({
  type: AUTH_FAIL,
})

const authLogout = (): AnyAction => ({
  type: AUTH_LOGOUT,
})

const authRegister = (): AnyAction => ({
  type: AUTH_REGISTER,
})

export const AuthLogin = (identifier: string, password: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(authStart())

      const response = await axios.post(`${apiUrl.uri}/auth/local`, {
        identifier,
        password,
      })
      dispatch(
        authSuccess({
          jwt: response.data.jwt,
          user: {
            _id: response.data.user._id,
            blocked: response.data.user.blocked,
            confirmed: response.data.user.confirmed,
            createdAt: response.data.user.createdAt,
            email: response.data.user.email,
            role: {
              _id: response.data.user.role._id,
              description: response.data.user.role.description,
              name: response.data.user.role.name,
              type: response.data.user.role.type,
            },
            username: response.data.user.username,
          },
        })
      )
    } catch (error) {
      const errMsg = error.response.data.message[0].messages[0].message
      const errorId = v4()
      dispatch(authError())
      dispatch(
        createError({
          message: JSON.stringify(errMsg),
          description: errorId,
          type: 'danger',
        })
      )
      createServerError({ message: errMsg, uuid: errorId })
    }
  }
}

export const AuthRegister = ({ username, email, password, router }: IRegister) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(authStart())
      await axios.post(`${apiUrl.uri}/auth/local/register`, {
        username,
        email,
        password,
      })
      dispatch(authRegister())
      router.reload()
    } catch (error) {
      if (error.response.data.error !== 'Bad Request') {
        const errMsg = JSON.stringify(error)
        const errorId = v4()

        dispatch(
          createError({
            message: JSON.stringify(errMsg),
            description: errorId,
            type: 'danger',
          })
        )
        createServerError({ message: errMsg, uuid: errorId })
        dispatch(authError())
      } else {
        const errMsg = JSON.stringify(error.response.data.message[0].messages[0].message)
        const errorId = v4()

        dispatch(
          createError({
            message: JSON.stringify(errMsg),
            description: errorId,
            type: 'danger',
          })
        )
        createServerError({ message: errMsg, uuid: errorId })
        dispatch(authError())
      }
    }
  }
}

export const AuthLogout = () => {
  return (dispatch: Dispatch): void => {
    try {
      dispatch(authLogout())
    } catch (error) {
      const errorId = v4()
      createServerError({ uuid: errorId, message: JSON.stringify(error) })
    }
  }
}
