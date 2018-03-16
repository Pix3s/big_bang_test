import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  addBookmarks,
  isInBookmarks,
  dellBookmarks,
  getBookmarks,
} from '../managers'

const ContainerCity = styled.li`
  padding: 1%;
  margin-right: 25%;
  margin-left: 25%;
  border: 2px solid black;
`

const Title = styled.p`
  font-weight: 400;
  font-size: 200%;
`

const CityItem = ({ isBookmarks, city, setCities }) => (
  <ContainerCity>
    <Title>{city.title}</Title>
    <button
      // disabled={!isBookmarks && isInBookmarks(city.woeid)}
      // onClick={() => {
        // if (isBookmarks) {
        //   dellBookmarks(city.woeid)
        //   setCities(getBookmarks())
        // } else {
        //   addBookmarks(city.woeid, city.title)
        // }
      // }}
    >
      {isBookmarks ? 'Убрать из числа избранных' : 'Сделать избранным'}
    </button>
    <br />
    <br />
    <Link to={'/weather/' + city.woeid}>Погода</Link>
  </ContainerCity>
)

export default CityItem
