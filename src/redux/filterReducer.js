import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        filterValue: typeof action.payload === 'string' ? action.payload : '',
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
