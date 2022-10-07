import React, { useState } from "react";
import { render } from "react-dom";
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import ConfirmationForm from './components/Confirmation.jsx';

import axios from 'axios';
// const axios = require('axios');

const App = () => {

  const [formNum, setFormNum] = useState(0);

  const handleCheckout = () => {
    setFormNum(formNum + 1);
  }

  // const submitForm1 = (e) => {
  //   e.preventDefault();
  //   console.log('event', e);
  //   console.log('submitting form1');
  //   axios.post('/checkout/form1', {});
  // }

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <div>
        {formNum === 0 &&
          <button onClick={handleCheckout}>
            Checkout
          </button> ||
          formNum === 1 && <Form1 formNum={formNum} setFormNum={setFormNum} /> ||
          formNum === 2 && <Form2 formNum={formNum} setFormNum={setFormNum} /> ||
          formNum === 3 && <Form3 formNum={formNum} setFormNum={setFormNum} /> ||
          formNum === 4 &&
          <ConfirmationForm formNum={formNum} setFormNum={setFormNum} />
        }
      </div>
    </div>
  )
}

render(<App />, document.getElementById("root"));