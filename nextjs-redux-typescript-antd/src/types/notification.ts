import { Dispatch } from 'react'

export interface INotification {
  message: string
  description: string
  type: 'success' | 'info' | 'warning' | 'error'
  dispatch?: Dispatch<unknown>
}
