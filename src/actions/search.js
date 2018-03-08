import { createAction } from 'redux-actions'

export const SET_CITIES = 'SET_CITIES'
export const REQUEST_CITIES = 'REQUEST_CITIES'

export const setCities = createAction(SET_CITIES)
export const requestCities = createAction(REQUEST_CITIES)

