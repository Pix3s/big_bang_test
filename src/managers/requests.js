import { mapForcast } from './utils'

const URL = '/api/location/'

const SEARCH = '/search/?query='

export const fetchWeather = id => {
  fetch(`${URL}${id}/`).then(response => mapForcast(response.json()))
}

export const fetchSearchCity = searchText =>
  fetch(`${URL}${SEARCH}${searchText}`).then(response => response.json())
