class Utils extends Object {
  static getImage = titleWeather => {
    switch (titleWeather) {
      case 'Snow':
        return 'sn'
        break
      case 'Sleet':
        return 'sl'
        break
      case 'Hail':
        return 'h'
        break
      case 'Thunder':
        return 't'
        break
      case 'Heavy Rain':
        return 'hr'
        break
      case 'Light Rain':
        return 'lr'
        break
      case 'Showers':
        return 's'
        break
      case 'Heavy Cloud':
        return 'hc'
        break
      case 'Light Cloud':
        return 'lc'
        break
      case 'Clear':
        return 'c'
        break
    }
  }

  static getDay = date => {
    let dateFormat = new Date(date)
    console.log(dateFormat.getDay())
    switch (dateFormat.getDay()) {
      case 0:
        return "Sunday"
        break
      case 1:
        return "Monday"
        break
      case 2:
        return "Tuesday"
        break
      case 3:
        return "Wednesday"
        break
      case 4:
        return "Thursday"
        break
      case 5:
        return "Friday"
        break
      case 6:
        return "Saturday"
        break
    }

  }
}

export default Utils
