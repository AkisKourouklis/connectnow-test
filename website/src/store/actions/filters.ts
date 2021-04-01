import {
  FILTERS_LOAD_SCORE,
  FILTERS_LOAD_QUERY,
  FILTERS_LOAD_ORDER_TYPE,
  FILTERS_LOAD_ORDER_ASC,
} from '../types'
import { AnyAction, Dispatch } from 'redux'

const score = (score: number): AnyAction => ({
  type: FILTERS_LOAD_SCORE,
  payload: {
    score,
  },
})

const query = (query: string): AnyAction => ({
  type: FILTERS_LOAD_QUERY,
  payload: {
    query,
  },
})

const orderType = (order_type: 'name' | 'score'): AnyAction => ({
  type: FILTERS_LOAD_ORDER_TYPE,
  payload: {
    order_type,
  },
})

const orderASC = (order_asc: boolean): AnyAction => ({
  type: FILTERS_LOAD_ORDER_ASC,
  payload: {
    order_asc,
  },
})

export const loadScore = (num: number) => {
  return (dispatch: Dispatch): void => {
    dispatch(score(num))
  }
}

export const loadQuery = (str: string) => {
  return (dispatch: Dispatch): void => {
    dispatch(query(str))
  }
}

export const loadOrderType = (type: 'score' | 'name') => {
  return (dispatch: Dispatch): void => {
    dispatch(orderType(type))
  }
}

export const loadOrderASC = (asc: boolean) => {
  return (dispatch: Dispatch): void => {
    dispatch(orderASC(asc))
  }
}
