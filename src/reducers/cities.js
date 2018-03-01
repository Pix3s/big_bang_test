import { combineReducers } from 'redux'
import { handleAction, handleActions } from 'redux-actions'
import { SET_CITIES, REQUEST_CITIES } from '../actions'

const listCities = handleAction(SET_CITIES, (_, { payload }) => payload, [])

const isFetching = handleActions(
  {
    [REQUEST_CITIES]: () => true,
    [SET_CITIES]: () => false,
  },
  false,
)

export default combineReducers({ listCities, isFetching })
