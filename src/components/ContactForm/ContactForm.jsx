import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const { name, number } = formData;
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Funkcja do walidacji pola imienia
  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else if (!/^[A-Za-z.'\- ]+$/.test(name)) {
      setNameError(
        'Name can only contain letters, apostrophe, dash, and spaces'
      );
    } else {
      setNameError('');
    }
  };

  // Funkcja do walidacji pola numeru telefonu
  const validateNumber = () => {
    if (!number.trim()) {
      setNumberError('Phone number is required');
    } else if (
      !/^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$/.test(
        number
      )
    ) {
      setNumberError('Invalid phone number format');
    } else {
      setNumberError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    // Walidacja przed dodaniem kontaktu
    validateName();
    validateNumber();

    // Sprawdź, czy są błędy walidacji przed dodaniem kontaktu
    if (!nameError && !numberError) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      addContact(contact);
      setFormData({
        name: '',
        number: '',
      });
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.inputLabel}>Name</label>
      <input
        className={css.inputField}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      {submitted && nameError && <p className={css.error}>{nameError}</p>}
      <label className={css.inputLabel}>Number</label>
      <input
        className={css.inputField}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      {submitted && numberError && <p className={css.error}>{numberError}</p>}
      <button className={css.btn} type="submit">
        Add Number
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
