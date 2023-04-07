import React, { useState } from 'react';

function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setBooks([...props.books, {title, author}])
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} required onChange={ev => setTitle(ev.target.value)} />
        <input type="text" placeholder="Author" value={author} required onChange={ev => setAuthor(ev.target.value)}/>
        <button>Add Book</button>
    </form>
  )
}

export default BookForm