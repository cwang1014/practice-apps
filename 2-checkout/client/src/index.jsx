import React from "react";
import { render } from "react-dom";
import Form1 from './components/Form1.jsx';

const axios = require('axios');

const App = () => {

  const handleCheckout = () => {
    console.log('checkout clicked');
    render(<Form1 submitForm={submitForm1} />, document.getElementById("root"));
  }

  const submitForm1 = (e) => {
    e.preventDefault();
    console.log('event', e);
    console.log('submitting form1');
    axios.post('/checkout/form1', {});
  }

  return (
    <div>
      <p>Hello, World!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

render(<App />, document.getElementById("root"));