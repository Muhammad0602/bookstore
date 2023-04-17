import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const id = Date.now();

    dispatch(addBooks({ id, title, author }));

    setTitle('');
    setAuthor('');
  }

  return (
    <form className="form" onSubmit={handleSubmit} action="">
      <h2>Add new book</h2>
      <div className="container">
        <input className="title" type="text" placeholder="Title" value={title} required onChange={(ev) => setTitle(ev.target.value)} />
        <input className="author" type="text" placeholder="Author" value={author} required onChange={(ev) => setAuthor(ev.target.value)} />
        <button className="form-btn" type="submit">Add Book</button>
      </div>
    </form>
  );
}

export default BookForm;
