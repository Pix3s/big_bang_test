export const addBookmarks = (id, title) => {
  if (isBookmarks(id)) return
  const bookmarksStr = localStorage.getItem('bookmarks')
  let bookmarks
  if (bookmarksStr === null || bookmarksStr === '[]') {
    bookmarks = [{ id: id, title: title }]
  } else {
    bookmarks = JSON.parse(bookmarksStr)
    bookmarks = [...bookmarks, { id: id, title: title }]
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

export const dellBookmarks = id => {
  const bookmarksStr = localStorage.getItem('bookmarks')
  if (bookmarksStr === null) return
  const newBookmarks = JSON.parse(bookmarksStr).filter(city => city.id !== id)
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
  return bookmarks.some(city => city.id === id)
}
