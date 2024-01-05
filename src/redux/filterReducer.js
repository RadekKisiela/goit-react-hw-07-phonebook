import { createSlice } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilter.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const filterReducer = filterSlice.reducer;
