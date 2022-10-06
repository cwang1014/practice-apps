import React from 'react';

const GlossaryEntry = ({ entry, onDelete }) => {
  return (
    <div id="entry">
      <li>{entry.word}: {entry.definition}</li>
      <button>edit</button>
      <button onClick={(e) => onDelete(entry.word)}>delete</button>
    </div>
  );
}

export default GlossaryEntry;