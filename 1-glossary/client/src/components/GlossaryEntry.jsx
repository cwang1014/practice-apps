import React from 'react';

const GlossaryEntry = ({ entry, onDelete, onEdit }) => {


  return (
    <div id="entry">
      <li>{entry.word}: {entry.definition}</li>
      <button onClick={() => onEdit(entry)}>edit</button>
      <button onClick={() => onDelete(entry.word)}>delete</button>
    </div>
  );
}

export default GlossaryEntry;