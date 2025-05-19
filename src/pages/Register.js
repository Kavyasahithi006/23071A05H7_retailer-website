import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Register</h2>
        {['Username', 'Email', 'Password', 'Confirm Password', 'Age', 'Contact'].map((field, i) => (
          <input
            key={i}
            type={field.toLowerCase().includes('password') ? 'password' : field === 'Email' ? 'email' : field === 'Age' ? 'number' : 'text'}
            placeholder={field}
            className="w-full p-3 border mb-3 rounded"
          />
        ))}
        <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">Register</button>
      </div>
    </div>
  );
};

export default Register;
