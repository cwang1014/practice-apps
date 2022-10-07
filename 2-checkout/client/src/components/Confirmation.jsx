import React from 'react';

const ConfirmationForm = ({ formNum, setFormNum }) => {

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
            <td>Your</td>
            <td>Info</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handlePurchase}>Purchase</button>
      <button>Reset</button>
    </div>
  );
}

export default ConfirmationForm;