import { createAction } from 'redux-actions'
import { getForcast } from '../managers'

export const SET_WEATHER = 'SET_WEATHER'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'

export const setWeather = createAction(SET_WEATHER)
export const requestWeather = createAction(REQUEST_WEATHER)
