import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Search } from './search'
import { Weather } from './weather'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Route path="/search" component={() => <Search isSearchAll={true} />} />
        <Route path="/bookmarks" component={() => <Search isSearchAll={false} />} />
        <Route path="/weather" component={() => <Weather />} />
      </div>
    )
  }
}

export default App
