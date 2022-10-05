import React from 'react';

const InputForm = (props) => {
  return (
    <div id="inputform">
      <form>
        <input placeholder="Input word" />
        <input placeholder="Input definition" />
        <button>Add to Glossary</button>
      </form>
    </div>
  );
}

export default InputForm;