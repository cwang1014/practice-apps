import React, { useState } from 'react';

const Search = ({ search }) => {

  const [query, setQuery] = useState('');

  return (
    <div id="search">
      <form>
        <input
          value={query}
          placeholder="search..."
          onChange={(e) => { setQuery(e.target.value); }} />
        <button onClick={(e) => { e.preventDefault(); search(query); }}>Search Now!</button>
      </form>
    </div>
  );
}

export default Search;