import { call, all } from 'redux-saga/effects'
import { watchCities } from './search'
import { getWeather } from './weather'

const rootSaga = function*() {
  while (true) {
    yield all([call(watchCities), call(getWeather)])
  }
}
export default rootSaga
