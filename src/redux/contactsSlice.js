import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchContacts, addContact, deleteContact } from './actions';

axios.defaults.baseURL = 'https://65967fcf6bb4ec36ca02c178.mockapi.io';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        return (state = action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
