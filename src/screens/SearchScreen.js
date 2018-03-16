import React, { Component } from 'react'
import styled from 'styled-components'
import { NavigationBar, List } from '../components'
import { localSearchCity, getBookmarks } from '../managers'

const SearchInput = styled.input`
  font-weight: 200;
  font-size: 200%;
  margin-top: 5%;
  width: 50%;
  height: 15%;
`

const Screen = styled.div`
  text-align: center;
`

class SearchScreen extends Component {
  componentWillMount() {
    const { setCities } = this.props
    setCities([])
  }

  serachOnChange = inputText => {
    const { setCities, requestCities } = this.props
    const isEmpty = inputText.indexOf(' ') === 0 || inputText.length === 0
    isEmpty? setCities([]) : requestCities(inputText)
  }

  render() {
    const { isBookmarks, cities, setCities, fetchSearchCity } = this.props

    return (
      <Screen>
        <NavigationBar />
        <SearchInput onChange={e => this.serachOnChange(e.target.value)} />
        <List setCities={setCities} isBookmarks={isBookmarks} cities={cities} />
      </Screen>
    )
  }
}

export default SearchScreen
