import * as R from 'ramda'
import { combineReducers } from 'redux'
import { handleAction, handleActions } from 'redux-actions'
import { SET_WEATHER, REQUEST_WEATHER } from '../actions'

/**
 * change keys in obj(applySpec)
 */
const forecast = handleAction(SET_WEATHER, (_, { payload }) => payload, null) 

const isFetching = handleActions(
  {
    [REQUEST_WEATHER]: () => true,
    [SET_WEATHER]: () => false,
  },
  true,
)

export default combineReducers({ forecast, isFetching })
