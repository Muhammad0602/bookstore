import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: false,
  status: '',
};

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under Construction',
      isLoading: true,
    }),
  },
});

export const { checkStatus } = categories.actions;
export default categories.reducer;
