import { call, all } from 'redux-saga/effects'
import { gerCities } from './search'
import { getWeather } from './weather'

// const rootSaga = function*() {
//     try {
//       yield all([call(gerCities), call(getWeather)])
//     } catch (error) {
//       console.log(error)
//       alert('Что-то пошло не так')
//     }
// }
export default gerCities
// export default  getWeather
