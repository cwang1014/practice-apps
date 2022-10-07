import React, { useState } from 'react';
import axios from 'axios';

const Form1 = ({ formNum, setFormNum }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm1Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
    axios.post('/checkout/form1', {
      name: name,
      email: email,
      password: password
    });
  }

  return (
    <form>
      <input
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleForm1Next}>Next</button>
    </form>
  );
}

export default Form1;