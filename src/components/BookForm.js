import React from 'react'

function BookForm() {

  return (
    <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <button>Add Book</button>
    </form>
  )
}

export default BookForm