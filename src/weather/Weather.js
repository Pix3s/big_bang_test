import React from 'react'
import WeatherItem from './WeatherItem'
import styled from 'styled-components'

const WeatherContainer = styled.div`
  padding: 2%;
`

const Country = styled.div`
  font-weight: 600;
  font-size: 200%;
`

const City = styled.div`
  font-weight: 300;
  font-size: 100%;
`

const Weather = ({ weather }) => (

  <WeatherContainer>
    <Country>
      {weather === null ? 'Wait please...' : weather.parent.title}
    </Country>
    <City>{weather === null ? 'Wait please...' : weather.title}</City>
    <WeatherItem
      paramWeather={weather === null ? null : weather.consolidated_weather}
    />
  </WeatherContainer>
)

export default Weather
