import React, { useState } from 'react';

const Search = (props) => {

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log('search value', search);
  }

  return (
    <div id="search">
      <form>
        <input value={search} placeholder="search..." onChange={handleSearch} />
        <button>Search Now!</button>
      </form>
    </div>
  );
}

export default Search;