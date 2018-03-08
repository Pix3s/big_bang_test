import React, { Component } from 'react'
import styled from 'styled-components'
import { NavigationBar, Weather } from '../components'

const Screen = styled.div``

class WeatherScreen extends Component {
  componentWillMount() {
    const { requestWeather, match } = this.props
    requestWeather(match.params.id)
  }

  render() {
    const { forecast, isFetching } = this.props

    return (
      <Screen>
        <NavigationBar />
        <Weather forecast={forecast} isFetching={isFetching} />
      </Screen>
    )
  }
}

export default WeatherScreen
