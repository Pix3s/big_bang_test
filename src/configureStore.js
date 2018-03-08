import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import gerCities from './sagas'
import { rootReducer } from './reducers'

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(gerCities)
  return store
}
