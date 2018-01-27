import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationContainer = styled.div`
  position: absolute;
  overflow: hidden;
  text-align: center;
  width: 100%;
`

const NavigationLink = styled(Link)`
  font-size: 150%;
  padding: 5%;
`

const NavigationBar = (openSearchAll, openBookmarks) => (
  <NavigationContainer>
    <NavigationLink to={'/search'}>Поиск</NavigationLink>
    <NavigationLink to={'/bookmarks'}>Избранное</NavigationLink>
  </NavigationContainer>
)

export default NavigationBar
