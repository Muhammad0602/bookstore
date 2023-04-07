import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const id = books.length;
    setBooks([...books, { title, author, id }]);
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
  books: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default BookForm;
