import { IUser } from './auth'

export interface State {
  auth: {
    isLoading: boolean
    token: string
    user: IUser | null
    isAuth: boolean
  }
  error: {
    message: string | null
    description: string | null
    type: 'success' | 'info' | 'warning' | 'error' | null
    isError: boolean
  }
}
