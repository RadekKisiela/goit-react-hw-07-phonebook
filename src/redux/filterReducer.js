import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const initialState = '';

const filterReducer = createReducer(initialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});

export default filterReducer;
