import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StoreManager from '../iteractors/StoreManager'

const ContainerCity = styled.li`
  padding: 5%;
  border: 2px solid black;
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
        <p>{city.title}</p>
        <button
          disabled={isSearchAll && StoreManager.isBookmarks(city.woeid)}
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
        <Link to={'/weather/' + (isSearchAll ? city.woeid : city.id)}>
          Посмотреть погоду
        </Link>
      </ContainerCity>
    )
  }
}

export default CityItem
