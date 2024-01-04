import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';
import filterReducer from './filterReducer';
import apiService from './apiService';

export const createStoreWithPreloadedState = async () => {
  try {
    const contacts = await apiService.getContacts();
    const preloadedState = {
      contacts: contacts,
    };

    const store = configureStore({
      reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
      },
      preloadedState: preloadedState,
    });

    return store;
  } catch (error) {
    console.error('Error while creating store:', error);
    throw error;
  }
};

export default createStoreWithPreloadedState;
