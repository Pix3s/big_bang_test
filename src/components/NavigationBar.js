import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavigationContainer = styled.div`
  position: absolute;
  margin-top: 1%;
  overflow: hidden;
  text-align: center;
  width: 100%;
`

const NavigationLink = styled(Link)`
  font-weight: 100;
  text-decoration: none;
  color: blue;
  font-size: 200%;
  padding: 5%;
`

const NavigationBar = () => (
  <NavigationContainer>
    <NavigationLink to={'/search'}>Поиск</NavigationLink>
    <NavigationLink to={'/bookmarks'}>Избранное</NavigationLink>
  </NavigationContainer>
)

export default NavigationBar
