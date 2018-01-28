export const addBookmarks = (id, title) => {
  let bookmarks = localStorage.getItem('bookmarks')
  if (bookmarks === null || '' + bookmarks === '' || bookmarks === '[]') {
    bookmarks = '[{"id":' + id + ',"title":"' + title + '"}]'
  } else {
    if (isBookmarks(id)) {
      return
    }
    bookmarks =
      bookmarks.substr(0, bookmarks.length - 1) +
      ',{"id":' +
      id +
      ',"title":"' +
      title +
      '"}]'
  }
  localStorage.setItem('bookmarks', bookmarks)
}

export const  dellBookmarks = id => {
  let bookmarks = '' + localStorage.getItem('bookmarks')
  console.log(id)
  if (bookmarks === null || bookmarks === '') {
    return
  }

  let json = JSON.parse(bookmarks)
  console.log(json)
  let index = 0
  for (let i = 0; i < json.length; i++) {
    console.log(json[i])
    if (parseInt(json[i].id) === parseInt(id)) {
      index = i
    }
  }
  console.log(index)
  delete json[index]
  let jsonStr = JSON.stringify(json)
  if (jsonStr.includes(',null,')) {
    jsonStr = jsonStr.replace(',null,', ',')
  } else if (jsonStr.includes(',null')) {
    jsonStr = jsonStr.replace(',null', '')
  } else if (jsonStr.includes('null,')) {
    jsonStr = jsonStr.replace('null,', '')
  } else {
    jsonStr = '[]'
  }
  localStorage.setItem('bookmarks', jsonStr)
}

export const  getBookmarks = () => {
  let bookmarks = localStorage.getItem('bookmarks')
  if (bookmarks === null || '' + bookmarks === '') {
    return []
  } else {
    let json = JSON.parse('' + bookmarks)
    console.log(json)
    return json
  }
}

export const  isBookmarks = id => {
  let bookmarks = '' + localStorage.getItem('bookmarks')
  return bookmarks.includes('"id":' + id + ',')
}
