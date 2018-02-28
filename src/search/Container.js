import {connect} from 'react-redux'
import {updateList, fetchSearchCity} from '../actions'
import SearchScreen from './SearchScreen';

const mapStateToProps = state => (
    {cities: state.cities}
);

const mapDispatchToProps = {
    updateList,
    fetchSearchCity
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)


