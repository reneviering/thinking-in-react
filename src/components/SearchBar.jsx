import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {

  const handleChange = event => {
    onSearchTermChange(event.target.value);
  }

  return (
    <fieldset>
      <input type="text" value={ searchTerm } onChange={ handleChange } />
    </fieldset>
  );
}

export default SearchBar;
