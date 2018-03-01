import { createAction } from 'redux-actions'

export const SET_WEATHER = 'SET_WEATHER'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'

export const setWeather = createAction(SET_WEATHER)
export const requestWeather = createAction(REQUEST_WEATHER)

export const fetchWeatherCity = id => {
  return dispatch => {
    dispatch(requestWeather())
    return fetch('/api/location/' + id + '/')
      .then(response => response.json())
      .then(weather => dispatch(setWeather(weather)))
      .catch(error => console.log('Error: ' + error.message))
  }
}
