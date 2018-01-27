class StoreManager extends Object {
  static addBookmarks = (id, title) => {
    let bookmarks = localStorage.getItem('bookmarks')
    if (bookmarks === null || '' + bookmarks === '') {
      bookmarks = '[{"id":' + id + ',"title":"' + title + '"}]'
    } else {
      if (StoreManager.isBookmarks(id)) {
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

  /**
   * TODO: удаление не работет
   */
  static dellBookmarks = id => {
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
    // json.remove(index)
    // console.log(json)
    localStorage.setItem('bookmarks', JSON.stringify(json))
  }

  static getBookmarks = () => {
    let bookmarks = localStorage.getItem('bookmarks')
    if (bookmarks === null || '' + bookmarks === '') {
      return []
    } else {
      let json = JSON.parse('' + bookmarks)
      console.log(json)
      return json
    }
  }

  static isBookmarks = id => {
    let bookmarks = '' + localStorage.getItem('bookmarks')
    return bookmarks.includes('"id":' + id + ',')
  }
}

export default StoreManager
