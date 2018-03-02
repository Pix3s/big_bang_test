import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { Search, Weather } from './containers'
import { configureStore } from './configureStore'

let store = configureStore()

const App = () => (
  <Provider store={store}>
    <div>
      <Route path="/search" component={() => <Search isBookmarks={false} />} />
      <Route
        path="/bookmarks"
        component={() => <Search isBookmarks={true} />}
      />
      <Route path="/weather/:id" component={Weather} />
    </div>
  </Provider>
)

export default App
