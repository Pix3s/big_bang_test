import {connect} from 'react-redux'
import {setWeather, fetchWeatherCity} from '../actions'
import WeatherScreen from './WeatherScreen';

const mapStateToProps = state => (
    {weather: state.weather}
);

const mapDispatchToProps = {
    setWeather,
    fetchWeatherCity
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen)


