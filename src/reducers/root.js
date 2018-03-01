import { combineReducers } from 'redux'
import { default as cities } from './cities'
import { default as weather } from './weather'

export default combineReducers({
  cities,
  weather,
})
