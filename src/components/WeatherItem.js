import React from 'react'
import styled from 'styled-components'
import { img, getDay } from '../managers'

const WeatherDay = styled.div`
  width: 12%;
  padding: 2%;
  text-align: center;
  border: 2px solid black;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`

const Day = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 150%;
`

const ContainerTableWeather = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`

const ContainerTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-top: 1%;
  width: 100%;
`

const WeatherItem = ({ paramWeather, isFetching }) => (
  <ContainerTableWeather>
    <ContainerTable>
      {isFetching
        ? 'Wait please...'
        : paramWeather.map(dayWeather => (
            <WeatherDay key={dayWeather.applicable_date}>
              <Day>{getDay(dayWeather.applicable_date)}</Day>
              <p>{new Date(dayWeather.applicable_date).toDateString()}</p>
              <p>{dayWeather.weather_state_name}</p>
              <p>{'Now: ' + parseInt(dayWeather.the_temp, 0) + '°'}</p>
              {'Max: ' +
                parseInt(dayWeather.max_temp, 0) +
                '° Min: ' +
                parseInt(dayWeather.min_temp, 0) +
                '°'}
              <p>{'Wind: ' + dayWeather.wind_direction_compass}</p>
              <p>
                {'Wind speed: ' + parseInt(dayWeather.wind_speed, 0) + 'mph'}
              </p>
              <p>{'Accuracy forecast: ' + dayWeather.predictability + '%'}</p>
              <Image
                src={
                  'https://www.metaweather.com/static/img/weather/png/' +
                  img[dayWeather.weather_state_name] +
                  '.png'
                }
              />
            </WeatherDay>
          ))}
    </ContainerTable>
  </ContainerTableWeather>
)

export default WeatherItem
