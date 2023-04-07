import React, { useState } from 'react';

function BookForm() {

  const [book, setBook] = useState({
    title: 'Doctors of hope',
    author: 'Max Stefan'
  })

  function handleSubmit(e) {
    e.preventDefault();
    setBook({
      title: input.value,
      author: input.value
    })

  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <button>Add Book</button>
    </form>
  )
}

export default BookForm