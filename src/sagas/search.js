import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchSearchCity } from '../managers/requests'
import { requestCities, setCities } from '../actions'

const citiesWorker = function*({ playload }) {
  try {
    const cities = yield call(fetchSearchCity, playload)
    yield put(setCities(cities))
  } catch (e) {
    console.log(e)
    yield put(setCities([]))
  }
}

export const gerCities = function*() {
  yield takeLatest(requestCities, citiesWorker)
}
