import React from 'react';

const Form3 = ({ formNum, setFormNum }) => {

  const handleForm3Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
  }

  return (
    <form>
      <input placeholder="Enter Credit Card Number" />
      <input placeholder="Enter CC Expiration (xx/xx)" />
      <input placeholder="Enter CC CVV" />
      <input placeholder="Enter Billing Zipcode" />
      <button onClick={handleForm3Next}>Next</button>
    </form>
  );
}

export default Form3;