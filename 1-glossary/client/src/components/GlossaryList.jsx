import React from 'react';
import GlossaryEntry from './GlossaryEntry.jsx';

const GlossaryList = ({ list, onDelete, onEdit, query }) => {
  return (
    <div id="list">
      <h3>Glossary List</h3>
      <ul>
        {list.map((entry, index) => {
          // check if entry includes query
          if (query.length === 0 || entry.word.includes(query)) {
            return <GlossaryEntry entry={entry} key={index} onDelete={onDelete} onEdit={onEdit} />
          }
        })}
      </ul>
    </div>
  );
}

export default GlossaryList;