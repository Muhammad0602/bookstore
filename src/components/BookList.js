import React, {useState} from 'react'
import BookForm from './BookForm'
import Book from './Book'

function BookList() {

  const [books, setBooks] = useState([{
    title: 'good doctor',
    author: 'Mike'
  }])

  return (
    <>
    {books.map(book => <Book title={book.title} author={book.author}/>)}
       
       <BookForm books={books} setBooks={setBooks}/>
    </>
 
  )
}

export default BookList