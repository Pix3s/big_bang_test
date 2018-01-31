export const addBookmarks = (id, title) => {
  if (isBookmarks(id)) return
  const bookmarksStr = localStorage.getItem('bookmarks')
  let json
  if (bookmarksStr === null || bookmarksStr === '[]') {
    json = [{ id: id, title: title }]
  } else {
    json = JSON.parse(bookmarksStr)
    json = [...json, { id: id, title: title }]
  }
  const bookmarks = JSON.stringify(json)
  localStorage.setItem('bookmarks', bookmarks)
}

export const dellBookmarks = id => {
  const bookmarksStr = localStorage.getItem('bookmarks')
  if (bookmarksStr === null) return
  const json = JSON.parse(bookmarksStr).filter(city => city.id !== id)
  const bookmarks = JSON.stringify(json)
  localStorage.setItem('bookmarks', bookmarks)
}

export const getBookmarks = () => {
  const bookmarks = localStorage.getItem('bookmarks')
  if (bookmarks === null) {
    return []
  } else {
    return JSON.parse(bookmarks)
  }
}

export const isBookmarks = id => {
  const bookmarks = localStorage.getItem('bookmarks')
  if (bookmarks === null) return false
  return bookmarks.includes('"id":' + id + ',')
}
