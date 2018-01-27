import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StoreManager from '../iteractors/StoreManager'

const ContainerCity = styled.li`
  padding: 5%;
  margin-right:25%;
  margin-left:25%;
  border: 2px solid black;
`

const Title = styled.p`
  font-weight: 400;
  font-size: 200%;
`

class CityItem extends Component {
  addLocalStorage = (id, title) => {
    StoreManager.addBookmarks(id, title)
    this.setState({ action: 'add' })
  }

  removeLocalStorage = id => {
    StoreManager.dellBookmarks(id)
    this.setState({ action: 'remove' })
  }

  render() {
    const { isSearchAll, city } = this.props

    return (
      <ContainerCity>
        <Title>{city.title}</Title>
        <button
          disabled={
            (isSearchAll && StoreManager.isBookmarks(city.woeid)) ||
            city.id === 666
          }
          onClick={() => {
            isSearchAll
              ? this.addLocalStorage(city.woeid, city.title)
              : this.removeLocalStorage(city.id)
          }}
        >
          {isSearchAll ? 'Добавить в избранное' : 'Убрать из числа избранных'}
        </button>
        <br />
        <br />
        <Link
          to={'/weather/' + (isSearchAll ? city.woeid : city.id)}
        >
          {!isSearchAll &&  city.id === 666? "Поломать все нахуй" : "Погода"}
        </Link>
      </ContainerCity>
    )
  }
}

export default CityItem
