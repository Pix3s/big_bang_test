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
    const { isSearchAll, cities, updateStore } = this.props

    return (
      <ListContainer >
        {cities.map(city => (
          <CityItem key={city.woeid} isSearchAll={isSearchAll} city={city} updateStore={updateStore}/>
        ))}
      </ListContainer>
    )
  }
}

export default List
