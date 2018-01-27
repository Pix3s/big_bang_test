import React, { Component } from 'react'
import styled from 'styled-components'
import CityItem from './CityItem'

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

class List extends Component {
  render() {
    const { isSearchAll, cities } = this.props

    return (
      <ListContainer>
        {cities.map(city => (
          <CityItem key={city.woeid} isSearchAll={isSearchAll} city={city} />
        ))}
      </ListContainer>
    )
  }
}

export default List
