// src/components/layout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
      <button
        onClick={() => navigateToPage('/signup')}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
       Signup
      </button>
      <button
        onClick={() => navigateToPage('/login')}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-auto"
      >
       Login
      </button>
      <button
        onClick={() => navigateToPage('/users')}
        className="bg-red-500  text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 w-full md:w-auto"
      >
       Users List
      </button>
    </div>
  );
};

export default Layout;
