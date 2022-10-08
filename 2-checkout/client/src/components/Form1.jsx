import React, { useState } from 'react';
import axios from 'axios';

const Form1 = ({ formNum, setFormNum }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm1Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
    axios.post('/checkout/form1', {
      username: username,
      email: email,
      password: password
    });
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <form>
      <input
        placeholder='name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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