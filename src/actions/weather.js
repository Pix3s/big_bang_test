// import { createAction } from 'redux-actions'
export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (weather) => {
    return {type: SET_WEATHER, weather}
};

// export const setWeather = createAction(SET_WEATHER)

export const fetchWeatherCity = id => {
    const searchString = '/api/location/' + id + '/'
    return dispatch => {
        dispatch(setWeather(null))
        return fetch(searchString)
            .then(response => response.json())
            .then(weather => { dispatch(setWeather(weather)) })
    }
}