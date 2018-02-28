import React, { Component } from 'react'
import styled from 'styled-components'
import { NavigationBar } from '../components'
import List from './List'
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
    const { isSearchAll, updateList } = this.props
    updateList(isSearchAll ? [] : getBookmarks())
  }

  render() {

    const { isSearchAll, toggleSearch, cities, updateList, fetchSearchCity } = this.props
    
    return (
      <Screen>
        <NavigationBar toggleSearch={toggleSearch} />
        <SearchInput
          onChange={e => {
            const inputText = e.target.value
            if (isSearchAll && (inputText.indexOf(' ') === 0 || inputText.length === 0)) {
                updateList([])
            } else {
              isSearchAll? fetchSearchCity(inputText) : updateList(localSearchCity(inputText))
            }
          }}
        />
        <List
          isSearchAll={isSearchAll}
          cities={cities}
          updateList={updateList}
        />
      </Screen>
    )
  }
}

export default SearchScreen
