import React, { Component } from 'react'
import List from './List'
import { NavigationBar } from '../components'
import styled from 'styled-components'
import {} from '../managers/StoreManager'
import { getBookmarks } from '../managers/StoreManager'

const SearchInput = styled.input`
  font-weight: 200;
  font-size: 200%;
  margin-top: 5%;
  width: 50%;
  height: 15%;
`

const ScreenSearch = styled.div`
  text-align: center;
`

class Container extends Component {
  constructor() {
    super()

    this.state = {
      cities: [],
      localCities: [],
    }
  }

  componentWillMount() {
    this.updateStore()
  }

  updateStore = () => {
    this.setState({ localCities: getBookmarks() })
  }

  requestSearchCity = search => {
    const searchString = '/api/location/search/?query=' + search

    if (search.indexOf(' ') === 0 || search.length === 0) {
      this.setState({ cities: [] })
    } else {
      fetch(searchString, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          if (res.status === 200) {
            console.log('200')
            return res.json()
          }
        })
        .then(cities => {
          this.setState({ cities: cities })
        })
        .catch(err => {
          console.log('Error = ' + err)
        })
    }
  }

  localSearchCity = inputText => {
    if (inputText.indexOf(' ') === 0 || inputText.length === 0) {
      this.setState({ localCities: getBookmarks() })
    } else {
      this.setState({
        localCities: getBookmarks().filter(city =>
          city.title.includes(inputText)
        ),
      })
    }
  }

  render() {
    const { isSearchAll } = this.props

    return (
      <ScreenSearch>
        <NavigationBar />
        <SearchInput
          onChange={e => {
            isSearchAll
              ? this.requestSearchCity(e.target.value)
              : this.localSearchCity(e.target.value)
          }}
        />
        <br />
        <List
          isSearchAll={isSearchAll}
          updateStore={this.updateStore}
          cities={isSearchAll ? this.state.cities : this.state.localCities}
        />
      </ScreenSearch>
    )
  }
}

export default Container
