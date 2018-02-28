import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './redusers'

export const configureStore = () => {
  return createStore(
    rootReducer, 
    applyMiddleware(
      thunkMiddleware
    )
  )
};