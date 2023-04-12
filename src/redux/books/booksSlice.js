import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksArray = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        id: payload.id,
        title: payload.title,
        author: payload.author,
      });
    },
    removeBook: (state, { payload }) => {
      const filteredBooks = state.books.filter((book) => book.id !== payload.id);
      return { ...state, books: filteredBooks };
    },
  },
});

export const { addBook, removeBook } = booksArray.actions;
export default booksArray.reducer;
