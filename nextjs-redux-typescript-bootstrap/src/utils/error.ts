import axios from 'axios'
import { apiUrl } from '../config/vars'
import { IError } from '../types/error'

export const createError = async ({ message, uuid }: IError): Promise<void> => {
  try {
    axios.post(`${apiUrl.uri}/errors`, {
      message,
      uuid,
    })
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error)
  }
}
