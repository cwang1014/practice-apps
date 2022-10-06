import React, { useState } from 'react';

const InputForm = ({ onInput }) => {

  const [inputWord, setInputWord] = useState('');
  const [inputDef, setInputDef] = useState('');

  const add = (e) => {
    e.preventDefault();
    let inputObj = {
      word: inputWord,
      definition: inputDef
    }
    onInput(inputObj);
    setInputWord('');
    setInputDef('');
  }

  return (
    <div id="inputform">
      <form>
        <input
          value={inputWord}
          placeholder="Input word"
          onChange={(e) => setInputWord(e.target.value)}
        />
        <input
          value={inputDef}
          placeholder="Input definition"
          onChange={(e) => setInputDef(e.target.value)}
        />
        <button onClick={add}>Add to Glossary</button>
      </form>
    </div>
  );
}

export default InputForm;