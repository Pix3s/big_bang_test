import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchWeather } from '../managers/requests'
import { requestWeather, setWeather } from '../actions'

const weatherWorker = function*({ playload }) {
  try {
    const weather = yield call(fetchWeather, playload)
    yield put(setWeather(weather))
  } catch (e) {
    console.log(e)
    alert('Что-то пошло не так')
  }
}

export const getWeather = function*() {
  yield takeLatest(requestWeather, weatherWorker)
}
