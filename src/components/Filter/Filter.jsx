import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  const handleChange = e => {
    const value = e.target.value;
    onChangeFilter(typeof value === 'string' ? value : '');
  };

  return (
    <label>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contact"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
