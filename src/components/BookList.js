import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <h1 className="loading">Loading...</h1>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Oopps somethings went wrong.PLease try again!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="main">
      {books && books.length > 0 ? books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      )) : <p>No Books</p>}

      <div className="horizontal-line" />

      <BookForm />
    </main>

  );
}

export default BookList;
