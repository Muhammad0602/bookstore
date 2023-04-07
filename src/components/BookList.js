import React from 'react'
import BookForm from './BookForm'
import Book from './Book'

function BookList() {
  return (
    <>
       <Book title='good doctor' author='Mike'/>
       <BookForm />
    </>
 
  )
}

export default BookList