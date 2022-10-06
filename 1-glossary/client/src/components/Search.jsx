import React, { useState } from 'react';

const Search = ({ query, setQuery }) => {



  return (
    <div id="search">
      <form>
        <input
          value={query}
          placeholder="search..."
          onChange={(e) => { setQuery(e.target.value); }} />
        {/* <button onClick={(e) => {
          e.preventDefault();
          search(query);
          // setQuery('');
        }}>Search Now!</button> */}
      </form>
    </div>
  );
}

export default Search;