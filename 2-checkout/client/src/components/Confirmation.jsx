import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmationForm = ({ formNum, setFormNum }) => {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get('/checkout')
      .then(result => { console.log(result); setFormData(result.data) });
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
            <td>Name:</td><td>{console.log(formData)}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handlePurchase}>Purchase</button>
      <button>Reset</button>
    </div>
  );
}

export default ConfirmationForm;