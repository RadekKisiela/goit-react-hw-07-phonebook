import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/actions';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => {
    const filterValue = state.filter;
    return String(filterValue);
  });

  const addContactHandler = (name, phone) => {
    dispatch(addContact(name, phone));
  };
  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };
  const setFilterHandler = value => {
    dispatch(setFilter(value));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={setFilterHandler} />
      {contacts ? (
        <ContactList
          contacts={contacts}
          onDeleteContact={deleteContactHandler}
        />
      ) : (
        <p>Loading contacts...</p>
      )}
    </div>
  );
};
