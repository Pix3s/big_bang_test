import { connect } from 'react-redux'
import { setWeather, requestWeather } from '../actions'
import { WeatherScreen } from '../screens'

const mapStateToProps = state => ({
  forecast: state.weather.forecast,
  isFetching: state.weather.isFetching,
})

const mapDispatchToProps = {
  setWeather,
  requestWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)
