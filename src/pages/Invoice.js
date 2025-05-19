import React from 'react';

const Invoice = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Invoice</h2>
      <p className="text-gray-700 mb-2">✅ Thank you for your purchase!</p>
      <p><strong>Order ID:</strong> #123456</p>
      <p><strong>Total Amount:</strong> ₹2397</p>
      <p><strong>Date:</strong> 19 May 2025</p>
    </div>
  );
};

export default Invoice;
