import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksArray = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        title: payload.title,
        author: payload.author,
        id: payload.id,
      });
    },
    removeBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = booksArray.actions;
export default booksArray.reducer;
