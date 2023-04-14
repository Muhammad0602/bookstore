import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>
        {title}
        {' '}
      </h3>
      <p>
        Written by
        {' '}
        {author}
      </p>
      <button type="button" onClick={() => dispatch(removeBooks({ id }))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
