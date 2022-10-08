import React, { useState } from 'react';
import axios from 'axios';

const Form3 = ({ formNum, setFormNum }) => {

  const [ccnumber, setCCNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');
  const [billingzip, setBillingzip] = useState('');

  const handleForm3Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
    axios.post('/checkout/form3', {
      ccnumber: ccnumber,
      expiration: expiration,
      cvv: cvv,
      billingzip: billingzip
    });
    setCCNumber('');
    setExpiration('');
    setCVV('');
    setBillingzip('');
  }

  return (
    <form>
      <input
        placeholder="Enter Credit Card Number"
        value={ccnumber}
        onChange={e => setCCNumber(e.target.value)}
      />
      <input
        placeholder="Enter CC Expiration (xx/xx)"
        value={expiration}
        onChange={e => setExpiration(e.target.value)}
      />
      <input
        placeholder="Enter CC CVV"
        value={cvv}
        onChange={e => setCVV(e.target.value)}
      />
      <input
        placeholder="Enter Billing Zipcode"
        value={billingzip}
        onChange={e => setBillingzip(e.target.value)}
      />
      <button onClick={handleForm3Next}>Next</button>
    </form>
  );
}

export default Form3;