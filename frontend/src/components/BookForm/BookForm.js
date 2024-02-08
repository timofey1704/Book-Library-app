import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addBook, fetchBook } from '../../redux/slices/booksSlice'
import createBookWithID from '../../utils/createBookWithID'
import { setError } from '../../redux/slices/errorSlice'
import booksData from '../../data/books.json'
import './Bookform.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length) // получение случайной книги от 1 до n где n = длина массива
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithID(randomBook, 'Random'))) // получение действия типа ADD_BOOK с payload книгой с присвоенным ID
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const book = createBookWithID({ title, author }, 'Manual')
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('"Title" and "Author" fields can not be empty'))
    }
  }

  const handleAddRandomBookViaAPI = async () => {
    try {
      setIsLoading(true)
      await dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
    } finally {
      setIsLoading(false)
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
        <button
          type="button"
          onClick={handleAddRandomBookViaAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading Book....</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random via API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
