import { connect } from 'react-redux'
import { setCities, fetchSearchCity } from '../actions'
import { SearchScreen } from '../screens'

const mapStateToProps = state => ({
  cities: state.cities.listCities,
  isFetching: state.cities.isFetching,
})

const mapDispatchToProps = {
  setCities,
  fetchSearchCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
