import { Dispatch } from 'react'

export interface INotification {
  message: string
  description: string
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
  dispatch?: Dispatch<unknown>
}
