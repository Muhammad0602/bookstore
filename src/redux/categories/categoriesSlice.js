import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under Construction',
    }),
  },
});

export const { checkStatus } = categories.actions;
export default categories.reducer;
