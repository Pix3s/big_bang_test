import React from 'react'
import styled from 'styled-components'
import CityItem from './CityItem'

const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const List = ({ isBookmarks, cities, setCities }) => (
  <ListContainer>
    {cities.map(city => (
      <CityItem
        key={city.woeid}
        isBookmarks={isBookmarks}
        city={city}
        setCities={setCities}
      />
    ))}
  </ListContainer>
)

export default List
