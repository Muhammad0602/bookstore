import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

function Book({
  title, author, category, id,
}) {
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="book">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="actions">
          <li>
            <button type="button">Comments</button>
          </li>
          <div className="vertical-line" />
          <li>
            <button type="button" onClick={() => dispatch(removeBooks({ id }))}>Remove</button>
          </li>
          <div className="vertical-line" />
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="progress-container">

        <div className="progress">
          <div className="progress-circle">
            <div className="circle" />
          </div>
          <div className="percentage">
            <h4>78%</h4>
            <p>Completed</p>
          </div>
        </div>

        <div className="progress-line" />
        <div className="chapter">
          <h4>Current Chapter</h4>
          <p>Chapter 6</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
