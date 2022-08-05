import React from 'react';

function Select({ select, selectcallback }) {
  function handleChange(e) {
    selectcallback(e.target.value);
  }
  return (
    <select value={select} className="select-dropdown" onChange={handleChange}>
      <option value="id">Id</option>
      <option value="first_name">First Name</option>
      <option value="last_name">Last Name</option>
      <option value="cuisine">Cuisine</option>
      <option value="chef_price_asc">Ascending Price</option>
      <option value="chef_price_desc">Descending Price</option>
    </select>
  );
}

export default Select;
