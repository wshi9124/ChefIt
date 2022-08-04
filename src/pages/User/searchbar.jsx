import React from 'react';

function SearchBar({ textcallback, text, searchcallback }) {
  function handleInput(e) {
    textcallback(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    searchcallback();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchbar"
        onChange={handleInput}
        type="text"
        placeholder="Find a Chef!"
        value={text}
      />
    </form>
  );
}

export default SearchBar;
