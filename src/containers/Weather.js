import { connect } from 'react-redux'
import { setWeather, fetchWeatherCity } from '../actions'
import { WeatherScreen } from '../screens'

const mapStateToProps = state => ({
  forecast: state.weather.forecast,
  isFetching: state.weather.isFetching,
})

const mapDispatchToProps = {
  setWeather,
  fetchWeatherCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)
