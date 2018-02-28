import {UPDATE_LIST, SET_WEATHER} from '../actions'
// import { handleAction} from 'redux-actions'

const defaultState = {
    cities: [],
    weather: null,
};

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_LIST:
            return Object.assign({}, state, {
                cities: action.cities
            });
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: action.weather
            });
        default:
            return defaultState;
    }
};

// const updateList = handleAction(
//     UPDATE_LIST,
//     (state, {payload}) => { 
//     }, 
//     defaultState
// );

// const setWeater = handleAction(
//     SET_WEATHER,
//     (state, {payload}) => { 
//     }, 
//     defaultState
// );

export default reduser
