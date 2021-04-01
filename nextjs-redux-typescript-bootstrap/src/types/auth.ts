import { NextRouter } from 'next/router'

export interface IRegister {
  username: string
  email: string
  password: string
  router: NextRouter
}
export interface IUser {
  jwt: string
  user: {
    _id: string
    blocked: boolean
    confirmed: boolean
    createdAt: string
    email: string
    role: {
      _id: string
      description: string
      name: string
      type: string
    }
    username: string
  }
}

export interface AuthState {
  isLoading: boolean
  token: string
  user: IUser | null
  isAuth: boolean
}
