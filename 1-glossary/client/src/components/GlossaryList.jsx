import React from 'react';
import GlossaryEntry from './GlossaryEntry.jsx';

const GlossaryList = ({ list, onDelete }) => {
  return (
    <div id="list">
      <h3>Glossary List</h3>
      <ul>
        {list.map((entry, index) => {
          return <GlossaryEntry entry={entry} key={index} onDelete={onDelete} />
        })}
      </ul>
    </div>
  );
}

export default GlossaryList;