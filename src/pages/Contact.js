import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">Contact Us</h2>
      <input className="w-full p-3 border rounded mb-4" type="text" placeholder="Your Name" />
      <input className="w-full p-3 border rounded mb-4" type="email" placeholder="Your Email" />
      <textarea className="w-full p-3 border rounded mb-4" rows="4" placeholder="Your Message"></textarea>
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Send Message</button>
    </div>
  );
};

export default Contact;
