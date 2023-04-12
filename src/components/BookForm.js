import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm({ books }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const id = `item${books.length + 1}`;
    dispatch(addBook({ title, author, id }));
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

BookForm.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookForm;
