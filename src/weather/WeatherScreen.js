import React, { Component } from 'react'
import { NavigationBar } from '../components'
import styled from 'styled-components'
import Weather from './Weather'

const Screen = styled.div`
`

class WeatherScreen extends Component {

  componentWillMount() {
    const {fetchWeatherCity} = this.props
    const url = window.location.href
    const id = url.substr(url.lastIndexOf('/') + 1)
    fetchWeatherCity(id)
  }

  render() {
    
    const {weather} = this.props

    return (
      <Screen>
        <NavigationBar />
        <Weather weather={weather} />
      </Screen>
    )
  }
}

export default WeatherScreen
