import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmationForm = ({ formNum, setFormNum }) => {

  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get('/checkout')
      .then(result => { setFormData(result.data) })
      .catch(err => console.log('error getting form'));
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
            <td>Name:</td><td>{!formData.length ? '' : formData[0].username}</td>
          </tr>
          <tr>
            <td>Email:</td><td>{!formData.length ? '' : formData[0].email}</td>
          </tr>
          <tr>
            <td>Password:</td><td>{!formData.length ? '' : formData[0].password}</td>
          </tr>
          <tr>
            <td>Address Line 1:</td><td>{!formData.length ? '' : formData[0].addressline1}</td>
          </tr>
          <tr>
            <td>Address Line 2:</td><td>{!formData.length ? '' : formData[0].addressline2}</td>
          </tr>
          <tr>
            <td>City:</td><td>{!formData.length ? '' : formData[0].city}</td>
          </tr>
          <tr>
            <td>State:</td><td>{!formData.length ? '' : formData[0].state}</td>
          </tr>
          <tr>
            <td>Zip Code:</td><td>{!formData.length ? '' : formData[0].zip}</td>
          </tr>
          <tr>
            <td>Phone Number:</td><td>{!formData.length ? '' : formData[0].phone}</td>
          </tr>
          <tr>
            <td>Credit Card Number:</td><td>{!formData.length ? '' : formData[0].ccnumber}</td>
          </tr>
          <tr>
            <td>Expiration Date:</td><td>{!formData.length ? '' : formData[0].expiration}</td>
          </tr>
          <tr>
            <td>CVV Code:</td><td>{!formData.length ? '' : formData[0].cvv}</td>
          </tr>
          <tr>
            <td>Billing Zip Code:</td><td>{!formData.length ? '' : formData[0].billingzip}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handlePurchase}>Purchase</button>
      {/* <button>Reset</button> */}
    </div>
  );
}

export default ConfirmationForm;