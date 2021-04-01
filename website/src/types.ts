// config
export interface IApiUrl {
  uri: string
}

// pages
export interface IIndexProps {
  props: {
    users: IUser[]
  }
}

// store
export interface State {
  users: IUserState
  filters: IFilters
}

export interface IUser {
  id: number
  name: string
  rating: number
  summary: string
  first_release_date: number
}

export interface IUserState {
  users: IUser[] | null
}

export interface IFilters {
  query: string
  score: string
  order_asc: boolean
  order_type: 'score' | 'name'
}
