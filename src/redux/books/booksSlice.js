import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: '',
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const books = await axios.get(
    `${process.env.REACT_APP_URL}/apps/${process.env.REACT_APP_ID}/books`,
  );
  return books.data;
});

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async ({ title, author, id }) => {
    try {
      const newBook = {
        item_id: id,
        category: 'find it yourself',
        title,
        author,
      };
      await axios.post(
        `${process.env.REACT_APP_URL}/apps/${process.env.REACT_APP_ID}/books`,
        newBook,
      );
      return newBook;
    } catch (error) {
      return error.message;
    }
  },
);

export const removeBooks = createAsyncThunk(
  'books/removeBooks',
  async ({ id }) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_URL}/apps/${process.env.REACT_APP_ID}/books/${id}`,
      );
      return id;
    } catch (error) {
      return error.message;
    }
  },
);

export const booksArray = createSlice({
  name: 'books',
  initialState,

  extraReducers: (builder) => {
    builder
      // Get all the books
      .addCase(getBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: Object.entries(action.payload).map(([id, data]) => ({
          item_id: id,
          ...data[0],
        })),
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))

      // Add a new book
      .addCase(addBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(addBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books, action.payload],
      }))
      .addCase(addBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))

      // Delete a book
      .addCase(removeBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(removeBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books].filter(
          (book) => book.item_id !== action.payload,
        ),
      }))
      .addCase(removeBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default booksArray.reducer;
