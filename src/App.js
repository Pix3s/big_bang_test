import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import { Search } from './search'
import { Weather } from './weather'
import { configureStore } from './configureStore'

let store = configureStore()

const App = () =>
  <Provider store={store}>
    <div>
      <Route path="/search" component={() => <Search isSearchAll={true} />} />
      <Route path="/bookmarks" component={() => <Search isSearchAll={false} />} />
      <Route path="/weather" component={() => <Weather />} />
    </div>
  </Provider>

export default App
