import React from 'react';

const Payment = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Payment Details</h2>
      {['Cardholder Name', 'Card Number'].map((placeholder, i) => (
        <input
          key={i}
          className="w-full p-3 border rounded mb-4"
          type="text"
          placeholder={placeholder}
        />
      ))}
      <button className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700">Pay Now</button>
    </div>
  );
};

export default Payment;
