import { connect } from 'react-redux'
import { setCities, requestCities } from '../actions'
import { SearchScreen } from '../screens'

const mapStateToProps = state => ({
  cities: state.cities.listCities,
  isFetching: state.cities.isFetching,
})

const mapDispatchToProps = {
  setCities,
  requestCities,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
