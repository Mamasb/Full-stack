// backend/server.js
const express = require('express');
const axios = require('axios'); // To make HTTP requests to Pesapal API
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware setup
app.use(express.json());

// Pesapal API credentials (store them in environment variables)
const PESAPAL_CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY;
const PESAPAL_CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET;
const PESAPAL_API_URL = 'https://www.pesapal.com/API/';

// Endpoint to create a payment request for Pesapal
app.post('/create-payment-request', async (req, res) => {
  const { amount, orderID, customerEmail, phoneNumber } = req.body; // Data from frontend

  if (!amount || !orderID || !customerEmail || !phoneNumber) {
    return res.status(400).json({ error: 'Required fields missing' });
  }

  try {
    // Pesapal payment request payload
    const paymentRequestData = {
      amount: amount,
      currency: 'USD', // Adjust currency as per your preference
      order_id: orderID,
      email: customerEmail,
      phone_number: phoneNumber,
      callback_url: process.env.PESAPAL_CALLBACK_URL, // Callback URL after payment
      description: 'Payment for Order: ' + orderID,
      reference: orderID,
      notification_url: process.env.PESAPAL_NOTIFICATION_URL, // Pesapal will notify your server after payment
    };

    // Authenticate using your Pesapal credentials
    const auth = {
      username: PESAPAL_CONSUMER_KEY,
      password: PESAPAL_CONSUMER_SECRET,
    };

    // Send request to Pesapal to create payment request
    const response = await axios.post(
      PESAPAL_API_URL + 'paymentrequest',
      paymentRequestData,
      { auth: auth }
    );

    if (response.data) {
      const paymentUrl = response.data.payment_url;
      res.json({ paymentUrl }); // Send the payment URL back to the frontend
    } else {
      res.status(500).json({ error: 'Payment request failed' });
    }
  } catch (error) {
    console.error('Payment request creation failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
