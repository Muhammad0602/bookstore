import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookForm from './BookForm';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      {books && books.length > 0 ? books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      )) : <p>No Books</p>}

      <BookForm />
    </>

  );
}

export default BookList;
