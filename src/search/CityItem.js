import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addBookmarks, isBookmarks, dellBookmarks, getBookmarks } from '../managers'

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

const CityItem = ({ isSearchAll, city, updateList }) =>
  <ContainerCity>
    <Title>{city.title}</Title>
    <button
      disabled={isSearchAll && isBookmarks(city.woeid)}
      onClick={() => {
        if (isSearchAll) { 
          addBookmarks(city.woeid, city.title)
        } else {
          dellBookmarks(city.woeid)
          updateList(getBookmarks())
        }
      }}
    >
      {isSearchAll ? 'Сделать избранным' : 'Убрать из числа избранных'}
    </button>
    <br/>
    <br/>
    <Link to={'/weather/' + city.woeid}>
      Погода
    </Link>
  </ContainerCity>

export default CityItem
