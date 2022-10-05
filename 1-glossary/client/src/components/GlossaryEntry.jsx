import React from 'react';

const GlossaryEntry = ({ entry, onDelete }) => {
  return (
    <div id="entry">
      <li>{entry.word}: {entry.definition}</li>
      <button>edit</button>
      <button onClick={(e) => console.log(e.target.parentElement.innerText)}>delete</button>
    </div>
  );
}

export default GlossaryEntry;