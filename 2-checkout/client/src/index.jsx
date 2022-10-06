import React from "react";
import { render } from "react-dom";
import Form1 from './components/Form1.jsx';

const App = () => {

  const handleCheckout = () => {
    console.log('checkout clicked');
    render(<Form1 />, document.getElementById("root"));
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