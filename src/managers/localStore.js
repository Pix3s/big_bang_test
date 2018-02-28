export const addBookmarks = (id, title) => {
  if (isBookmarks(id)) return
  const bookmarksStr = localStorage.getItem('bookmarks')
  let bookmarks
  if (bookmarksStr === null || bookmarksStr === '[]') {
    bookmarks = [{ woeid: id, title: title }]
  } else {
    bookmarks = JSON.parse(bookmarksStr)
    bookmarks = [...bookmarks, { woeid: id, title: title }]
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

export const dellBookmarks = id => {
  const bookmarksStr = localStorage.getItem('bookmarks')
  if (bookmarksStr === null) return
  const newBookmarks = JSON.parse(bookmarksStr).filter(city => city.woeid !== id)
  localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
}

export const getBookmarks = () => {
  const bookmarksStr = localStorage.getItem('bookmarks')
  if (bookmarksStr === null) {
    return []
  } else {
    return JSON.parse(bookmarksStr)
  }
}

export const isBookmarks = id => {
  const bookmarksStr = localStorage.getItem('bookmarks')
  if (bookmarksStr === null) return false
  const bookmarks = JSON.parse(bookmarksStr)
  return bookmarks.some(city => city.woeid === id)
}

export const localSearchCity = inputText => {
  if (inputText.indexOf(' ') === 0 || inputText.length === 0) {
    return getBookmarks()
  } else {
    return getBookmarks().filter(city => city.title.toLowerCase().includes(inputText.toLowerCase()))
  }
}
