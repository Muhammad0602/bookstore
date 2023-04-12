import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}

      <BookForm books={books} />
    </>

  );
}

export default BookList;
