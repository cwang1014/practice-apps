import React from 'react';

const Form2 = ({ formNum, setFormNum }) => {

  const handleForm2Next = (e) => {
    e.preventDefault();
    setFormNum(formNum + 1);
  }

  return (
    <form>
      <input placeholder="Enter Address Line 1" />
      <input placeholder="Enter Address Line 2" />
      <input placeholder="Enter City" />
      <input placeholder="Enter State" />
      <input placeholder="Enter Zipcode" />
      <input placeholder="Enter Phone Number" />
      <button onClick={handleForm2Next}>Next</button>
    </form>
  );
}

export default Form2;