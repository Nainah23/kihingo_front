import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Donations.css"; // Import Donations.css

const Donations = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDonation = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/donations/initiate', { amount, phoneNumber });
      // Handle the response from MPESA STK Push
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <form className="donation-form" onSubmit={handleDonation}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donations;
