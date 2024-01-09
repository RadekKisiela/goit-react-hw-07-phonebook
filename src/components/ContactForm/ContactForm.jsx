import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const { name, phone } = formData;
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const validatePhone = () => {
    if (!phone.trim()) {
      setPhoneError('Phone number is required');
    } else if (
      !/^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$/.test(
        phone
      )
    ) {
      setPhoneError('Invalid phone number format');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    validateName();
    validatePhone();

    if (!nameError && !phoneError) {
      const contact = {
        id: nanoid(),
        name,
        phone,
      };

      addContact(contact);
      setFormData({
        name: '',
        phone: '',
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
        id="name"
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
        id="phone"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={handleChange}
      />
      {submitted && phoneError && <p className={css.error}>{phoneError}</p>}
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
