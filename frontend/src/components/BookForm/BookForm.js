import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/ books/actionCreators'
import booksData from '../../data/books.json'
import './Bookform.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length) // получение случайной книги от 1 до n где n = длина массива
    const randomBook = booksData[randomIndex]

    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(), //добавление ID к книге, выбранной рандомно, чтобы все отображалось корректно
      isFavorite: false,
    }

    dispatch(addBook(randomBookWithID)) // получение действия типа ADD_BOOK с payload книгой с присвоенным ID
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const book = {
        title: title,
        author: author,
        id: uuidv4(),
        isFavorite: false,
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random book
        </button>
      </form>
    </div>
  )
}

export default BookForm
