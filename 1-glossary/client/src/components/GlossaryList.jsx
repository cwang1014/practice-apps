import React from 'react';
import GlossaryEntry from './GlossaryEntry.jsx';

const GlossaryList = (props) => {
  return (
    <div id="list">
      <h3>Glossary List</h3>
      <ul>
        <GlossaryEntry />
      </ul>
    </div>
  );
}

export default GlossaryList;