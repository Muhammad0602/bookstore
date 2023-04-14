import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';

function BookForm() {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const id = `item${books.length + 1}`;

    dispatch(addBooks({ id, title, author }));

    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} required onChange={(ev) => setTitle(ev.target.value)} />
      <input type="text" placeholder="Author" value={author} required onChange={(ev) => setAuthor(ev.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
