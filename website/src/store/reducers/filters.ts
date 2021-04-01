import update from 'immutability-helper'
import { AnyAction } from 'redux'
import {
  FILTERS_CLEAR,
  FILTERS_LOAD_ORDER_ASC,
  FILTERS_LOAD_ORDER_TYPE,
  FILTERS_LOAD_QUERY,
  FILTERS_LOAD_SCORE,
} from '../types'
import { IFilters } from '../../types'

const initialState: IFilters = {
  order_asc: false,
  order_type: 'name',
  query: '',
  score: '',
}

const loadOrderASC = (state: IFilters, action: AnyAction): IFilters => {
  return update(state, {
    order_asc: { $set: action.payload.order_asc },
  })
}

const loadOrderType = (state: IFilters, action: AnyAction): IFilters => {
  return update(state, {
    order_type: { $set: action.payload.order_type },
  })
}

const loadQuery = (state: IFilters, action: AnyAction): IFilters => {
  return update(state, {
    query: { $set: action.payload.query },
  })
}

const loadScore = (state: IFilters, action: AnyAction): IFilters => {
  return update(state, {
    score: { $set: action.payload.score },
  })
}

const clear = (state: IFilters): IFilters => {
  return update(state, {
    score: { $set: '' },
    query: { $set: '' },
    order_type: { $set: 'name' },
    order_asc: { $set: false },
  })
}

const reducer = (state: IFilters = initialState, action: AnyAction): IFilters => {
  switch (action.type) {
    case FILTERS_LOAD_ORDER_ASC:
      return loadOrderASC(state, action)
    case FILTERS_LOAD_ORDER_TYPE:
      return loadOrderType(state, action)
    case FILTERS_LOAD_QUERY:
      return loadQuery(state, action)
    case FILTERS_LOAD_SCORE:
      return loadScore(state, action)
    case FILTERS_CLEAR:
      return clear(state)
    default:
      return state
  }
}

export default reducer
