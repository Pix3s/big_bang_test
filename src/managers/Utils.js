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

export const getDay = date => day[new Date(date).getDay()]
