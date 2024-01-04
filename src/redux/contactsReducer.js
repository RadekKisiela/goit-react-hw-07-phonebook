import { createReducer } from '@reduxjs/toolkit';
import { setContacts, addContact, deleteContact } from './actions';

const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(setContacts, (state, action) => {
      return (state = action.payload);
    })
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export default contactsReducer;
