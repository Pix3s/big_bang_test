import React, { Component } from 'react'
import styled from 'styled-components'
import Utils from '../iteractors/Utils'

const Table = styled.div`
  padding: 5%;
  border: 2px solid black;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`

class TableWeather extends Component {
  render() {
    const { paramWeather } = this.props
    return (
      <div>
        <div>
          {paramWeather === null
            ? 'Wait please...'
            : paramWeather.map(dayWeather => (
                <Table>
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
                      Utils.getImage(dayWeather.weather_state_name) +
                      '.png'
                    }
                  />
                </Table>
              ))}
        </div>
      </div>
    )
  }
}

export default TableWeather
