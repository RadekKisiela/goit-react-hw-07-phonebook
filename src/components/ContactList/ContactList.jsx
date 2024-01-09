import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  console.log('Received contact in ContactItem:', contact);
  return (
    <li>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button className={css.btn} onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log('Received contacts:', contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
