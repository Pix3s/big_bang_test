import React, { Component } from 'react'
import styled from 'styled-components'
import {img, getDay} from '../iteractors/Utils'

const Table = styled.div`
  width: 10%;
  padding: 3%;
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
  margin-top: 5%;
  width: 100%;
`

class TableWeather extends Component {
  render() {
    const { paramWeather } = this.props
    return (
      <ContainerTableWeather>
        <ContainerTable>
          {paramWeather === null
            ? 'Wait please...'
            : paramWeather.map(dayWeather => (
                <Table>
                  <Day>{getDay(dayWeather.applicable_date)}</Day>
                  <p>{new Date(dayWeather.applicable_date).toDateString()}</p>
                  <p>{dayWeather.weather_state_name}</p>
                  <p>{'Now: ' + parseInt(dayWeather.the_temp) + '°'}</p>
                  <p>
                    {'Max: ' +
                      parseInt(dayWeather.max_temp) +
                      '° Min: ' +
                      parseInt(dayWeather.min_temp) +
                      '°'}
                  </p>
                  <Image
                    src={
                      'https://www.metaweather.com/static/img/weather/png/' +
                      img[dayWeather.weather_state_name] +
                      '.png'
                    }
                  />
                </Table>
              ))}
        </ContainerTable>
      </ContainerTableWeather>
    )
  }
}

export default TableWeather
