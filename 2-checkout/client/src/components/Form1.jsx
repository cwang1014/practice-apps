import React from 'react';

const Form1 = ({ submitForm }) => {
  return (
    <form>
      <input placeholder='name' />
      <input placeholder='email' />
      <input placeholder='password' />
      <button onClick={submitForm}>Next</button>
    </form>
  );
}

export default Form1;