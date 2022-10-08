import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmationForm = ({ formNum, setFormNum }) => {

  // const [formData, setFormData] = useState([]);
  let formData;

  useEffect(() => {
    axios.get('/checkout')
      .then(result => { formData = result.data });
  }, []);

  const handlePurchase = (e) => {
    setFormNum(0);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Confirm Your Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td><td>{formData.username /* having trouble here because I want to use the state to show the data but it is trying to render the data from result before it has been returned so it is checking an undefined formData array initially before useEffect runs */}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handlePurchase}>Purchase</button>
      <button>Reset</button>
    </div>
  );
}

export default ConfirmationForm;