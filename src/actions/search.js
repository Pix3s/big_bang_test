import { createAction } from 'redux-actions'

export const SET_CITIES = 'SET_CITIES'
export const REQUEST_CITIES = 'REQUEST_CITIES'

export const setCities = createAction(SET_CITIES)
export const requestCities = createAction(REQUEST_CITIES)

export const fetchSearchCity = searchText => {
  return dispatch => {
    dispatch(requestCities())
    return fetch(`/api/location/search/?query=${searchText}`)
      .then(response => response.json())
      .then(cities => dispatch(setCities(cities)))
      .catch(error => console.log('Error: ' + error.message))
  }
}
