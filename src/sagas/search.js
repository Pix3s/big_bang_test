import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchSearchCity } from '../managers/requests'
import { REQUEST_CITIES, setCities } from '../actions'

const getCities = function*({ payload }) {
  try {
    const cities = yield call(fetchSearchCity, payload)
    yield put(setCities(cities))
  } catch (e) {
    console.log(e)
    yield put(setCities([]))
  }
}

export const watchCities = function*() {
  yield takeEvery(REQUEST_CITIES, getCities)
}
