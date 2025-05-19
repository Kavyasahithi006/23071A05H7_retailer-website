import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">Login</h2>
        <input className="w-full p-3 border rounded mb-4" type="email" placeholder="Email" />
        <input className="w-full p-3 border rounded mb-6" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Login</button>
      </div>
    </div>
  );
};

export default Login;
