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
}

export default Utils
