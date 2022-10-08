import React, { useState } from 'react';
import axios from 'axios';

const Form2 = ({ formNum, setFormNum }) => {

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleForm2Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
    axios.post('/checkout/form2', {
      addressline1: address1,
      addressline2: address2,
      city: city,
      state: state,
      zip: zip,
      phone: phone
    });
    setAddress1('');
    setAddress2('');
    setCity('');
    setState('');
    setZip('');
    setPhone('');
  }

  return (
    <form>
      <input
        placeholder="Enter Address Line 1"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
      />
      <input
        placeholder="Enter Address Line 2"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />
      <input
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        placeholder="Enter State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        placeholder="Enter Zipcode"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <input
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleForm2Next}>Next</button>
    </form>
  );
}

export default Form2;