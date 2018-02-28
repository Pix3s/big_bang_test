import React from 'react'
import styled from 'styled-components'
import CityItem from './CityItem'

const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const List = ({ isSearchAll, cities, updateList }) => (
  <ListContainer >
    {cities.map(city => (
      <CityItem key={city.woeid} isSearchAll={isSearchAll} city={city} updateList={updateList} />
    ))}
  </ListContainer>
)

export default List
