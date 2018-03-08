import * as R from 'ramda'

export const img = {
  Snow: 'sn',
  Sleet: 'sn',
  Hail: 'h',
  Thunder: 't',
  'Heavy Rain': 'hr',
  'Light Rain': 'lr',
  Showers: 's',
  'Heavy Cloud': 'hc',
  'Light Cloud': 'lc',
  Clear: 'c',
}
export const day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const dayRus = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]

export const getDay = date => day[new Date(date).getDay()]

export const mapForcast = R.applySpec({
  country: R.pipe(R.prop('parent'), R.prop('title')),
  city: R.prop('title'),
  consolidatedWeather: R.prop('consolidated_weather'),
})
