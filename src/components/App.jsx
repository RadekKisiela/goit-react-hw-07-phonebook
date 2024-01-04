import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/actions';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => {
    const filterValue = state.filter;
    return String(filterValue);
  });

  const addContactHandler = (name, number) => {
    dispatch(addContact(name, number));
  };
  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };
  const setFilterHandler = value => {
    dispatch(setFilter(value));
  };

  const storedContacts = useLocalStorage('contacts');

  const filteredContacts = storedContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContactHandler}
        />
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default App;
