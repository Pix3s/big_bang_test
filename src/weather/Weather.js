import React, { Component } from 'react'
import TableWeather from './TableWeather'
import styled from 'styled-components'

const WeatherContainer = styled.div`
  padding: 2%;
`

const Country = styled.div`
  font-weight: 600;
  font-size: 200%
`

const City = styled.div`
  font-weight: 300;
  font-size: 100%
`

class Weather extends Component {

  constructor() {
    super()
  }

  render() {

    const {weather} = this.props

    return (
      <WeatherContainer>
        <Country>{weather === null? "Wait pleas..." : weather.parent.title}</Country>
        <City>{weather === null? "Wait pleas..." : weather.title}</City>
        <TableWeather paramWeather={weather === null? null : weather.consolidated_weather} />
      </WeatherContainer>
    )
  }
}

export default Weather
