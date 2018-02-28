// import { createAction } from 'redux-actions'

export const UPDATE_LIST = 'UPDATE_LIST';

// export const updateList = createAction(UPDATE_LIST)

export const updateList = cities => {
    return { type: UPDATE_LIST, cities }
};

export const fetchSearchCity = searchText => {
    const searchString = '/api/location/search/?query=' + searchText
    return dispatch => {
        return fetch(searchString)
            .then(response => response.json())
            .then(cities => { dispatch(updateList(cities)) })
            .catch(error => console.log('Error: ' + error.message))
    }
}