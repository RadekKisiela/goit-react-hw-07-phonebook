import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filterValue);

  const handleInputChange = event => {
    const inputValue = event.target.value;
    dispatch(setFilter(inputValue));
  };

  return (
    <div>
      <label>
        Find contact by name
        <input
          className={css.inputFilter}
          type="text"
          value={filterValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
