import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentPage = () => {
  const { bookingId } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    try {
      const { data: clientSecret } = await axios.post('/api/payment', { bookingId });

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: 'User Name', // Replace with actual user details
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === 'succeeded') {
        setSuccess('Payment successful!');
      }
    } catch (error) {
      setError('Payment failed.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold">Payment for Booking</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      {!success && (
        <form onSubmit={handlePayment}>
          <CardElement className="border p-4 mb-4" />
          <button
            type="submit"
            disabled={!stripe}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Pay
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
