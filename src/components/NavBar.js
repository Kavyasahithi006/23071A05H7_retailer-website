import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">🛍️ RetaileR</div>
        <div className="space-x-4 text-sm sm:text-base">
          {['/', '/register', '/catalogue', '/cart', '/contact', '/payment', '/invoice'].map((path, i) => (
            <Link
              to={path}
              key={i}
              className="hover:underline transition duration-200"
            >
              {path === '/' ? 'Login' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
