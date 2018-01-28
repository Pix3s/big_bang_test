import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { addBookmarks, isBookmarks } from '../iteractors/StoreManager'
import { dellBookmarks } from '../iteractors/StoreManager'

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

class CityItem extends Component {

  render() {
    const { isSearchAll, city, updateStore } = this.props

    return (
      <ContainerCity>
        <Title>{city.title}</Title>
        <button
          disabled={isSearchAll && isBookmarks(city.woeid)}
          onClick={() => {
            isSearchAll
              ? addBookmarks(city.woeid, city.title)
              : dellBookmarks(city.id)
            updateStore()
          }}
        >
          {isSearchAll ? 'Добавить в избранное' : 'Убрать из числа избранных'}
        </button>
        <br />
        <br />
        <Link to={'/weather/' + (isSearchAll ? city.woeid : city.id)}>
          {'Погода'}
        </Link>
      </ContainerCity>
    )
  }
}

export default CityItem
