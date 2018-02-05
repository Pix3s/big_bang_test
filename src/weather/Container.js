import React, { Component } from 'react'
import { NavigationBar } from '../components'
import styled from 'styled-components'
import Weather from './Weather'

const ScreenWeather = styled.div`
`

class Container extends Component {
  constructor() {
    super()

    this.state = {
      weather: null,
    }
  }

  componentWillMount() {
    const url = window.location.href
    const id = url.substr(url.lastIndexOf('/') + 1)
    this.requestWeatherCity(id)
  }

  requestWeatherCity = id => {
    const searchString = '/api/location/' + id + '/'

    fetch(searchString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
      })
      .then(weather => {
        this.setState({ weather: weather })
      })
      .catch(err => {
        console.log(
          'Can’t access ' + searchString + '. No response. Error = ' + err
        )
      })
  }

  render() {
    return (
      <ScreenWeather>
        <NavigationBar />
        <Weather weather={this.state.weather} />
      </ScreenWeather>
    )
  }
}

export default Container
