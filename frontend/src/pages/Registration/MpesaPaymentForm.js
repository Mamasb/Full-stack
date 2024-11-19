// src/MpesaPaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MpesaPaymentForm = ({ paymentDetails }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentStatus('');

    try {
      const response = await axios.post('https://www.pesapal.com/API/PostPesapalDirectOrderV4', {
        amount: paymentDetails.amount,
        phone_number: '0723279121',  // Replace with actual phone number input field
        merchant_id: 'your-merchant-id',  // Replace with your Merchant ID
        api_key: 'PBf6AzyBldZTWokclpWWj6pOkPZOlghQ',          // Replace with your API Key
        api_secret: '/diBWz+tpf9cjxqz0cVBXzFf0gQ=',    // Replace with your API Secret
      });

      if (response.status === 200) {
        setPaymentStatus('Payment initiated successfully!');
      } else {
        setPaymentStatus('Payment initiation failed.');
      }
    } catch (error) {
      setPaymentStatus('Error occurred during payment.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Complete Payment</h2>
      <button onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Pay with Pesapal'}
      </button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default MpesaPaymentForm;
