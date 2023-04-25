import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterContacts/filterContacts.slice';

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.filterWrapper}>
      <p className={css.filterText}>Find contact by name</p>
      <label htmlFor="">
        <input
          className={css.filterInput}
          type="text"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
