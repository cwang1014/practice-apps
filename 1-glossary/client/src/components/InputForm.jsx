import React, { useState } from 'react';

const InputForm = ({ onInput }) => {

  const [input, setInput] = useState('');

  const add = (e) => {
    e.preventDefault();
    onInput(input);
  }

  return (
    <div id="inputform">
      <form>
        <input placeholder="Input word" />
        <input placeholder="Input definition" />
        <button onClick={add}>Add to Glossary</button>
      </form>
    </div>
  );
}

export default InputForm;