import { createAction } from '@reduxjs/toolkit';

export const setContacts = createAction('contacts/setContacts');
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter', value => ({
  payload: typeof value === 'string' ? value : '',
}));
