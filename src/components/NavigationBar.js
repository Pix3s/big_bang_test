import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationContainer = styled.div``

const NavigationLink = styled(Link)`
  padding: 2%;
`

const NavigationBar = (openSearchAll, openBookmarks) => (
  <NavigationContainer>
    <NavigationLink to={'/search'}>Поиск</NavigationLink>
    <NavigationLink to={'/bookmarks'}>Избранное</NavigationLink>
  </NavigationContainer>
)

export default NavigationBar
