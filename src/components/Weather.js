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

const Weather = ({ forecast, isFetching }) => (
  <WeatherContainer>
    <Country>{isFetching ? 'Wait please...' : forecast.parent.title}</Country>
    <City>{isFetching ? 'Wait please...' : forecast.title}</City>
    {isFetching ? (
      <p>Wait please...</p>
    ) : (
      <WeatherItem
        paramWeather={forecast.consolidated_weather}
        isFetching={isFetching}
      />
    )}
  </WeatherContainer>
)

export default Weather
