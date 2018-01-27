import React, { Component } from 'react'
import { NavigationBar } from '../components'
import styled from 'styled-components'
import Weather from './Weather'

const ScreenWeather = styled.div`
  padding: 2%;
`

class Container extends Component {

  constructor() {
    super()

    this.state = {
      weather: null
    }
  }

  componentWillMount() {
    let url = window.location.href
    let id = url.substr(url.lastIndexOf('/') + 1)
    this.requestSearchCity(id)
  }

  requestSearchCity = id => {
    let searchString = '/api/location/' + id + "/"

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
        <br />
        <Weather weather={this.state.weather}/>
      </ScreenWeather>
    )
  }
}

export default Container
