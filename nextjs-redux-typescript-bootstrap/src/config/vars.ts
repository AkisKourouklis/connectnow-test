interface IApiUrl {
  uri: string
}

export const apiUrl: IApiUrl = {
  uri: process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'http://localhost:1337',
}
export const env = process.env.NODE_ENV
