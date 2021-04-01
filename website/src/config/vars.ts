import { IApiUrl } from '../types'

export const apiUrl: IApiUrl = {
  uri:
    process.env.NODE_ENV === 'development'
      ? ' https://public.connectnow.org.uk/applicant-test/'
      : ' https://public.connectnow.org.uk/applicant-test/',
}
export const env = process.env.NODE_ENV
