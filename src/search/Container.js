import React, { Component } from 'react'
import List from './List'
import { NavigationBar } from '../components'
import styled from 'styled-components'
import StoreManager from '../iteractors/StoreManager'

const SearchInput = styled.input`
  padding-left: 2%;
  margin-left: 2%;
  padding-right: 2%;
`

const ScreenSearch = styled.div`
  padding: 1%;
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
    this.setState({ localCities: StoreManager.getBookmarks() })
  }

  requestSearchCity = search => {
    let searchString = '/api/location/search/?query=' + search

    if (search.indexOf(' ') === 0 || search.length === 0) {
      this.setState({ cities: [] })
      return
    }

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
        console.log(
          'Can’t access ' + searchString + '. No response. Error = ' + err
        )
      })
  }

  localSearchCity = inputText => {
    if (inputText.indexOf(' ') === 0 || inputText.length === 0) {
      this.setState({ localCities: StoreManager.getBookmarks() })
    } else if (inputText === 'fuck you') {
      this.setState({ localCities: [{ title: 'FUCK YOU!!!' }] })
    } else {
      this.setState({
        localCities: StoreManager.getBookmarks().filter(city => {
          let nameCity = city.title
          return nameCity.includes(inputText)
        }),
      })
    }
  }

  render() {
    const { isSearchAll } = this.props

    return (
      <ScreenSearch>
        <NavigationBar />
        <br />
        <SearchInput
          onChange={e => {
            let inputText = e.target.value
            if (isSearchAll) {
              this.requestSearchCity(inputText)
            } else {
              this.localSearchCity(inputText)
            }
          }}
        />
        <br />
        <List
          isSearchAll={isSearchAll}
          cities={isSearchAll ? this.state.cities : this.state.localCities}
        />
      </ScreenSearch>
    )
  }
}

export default Container
