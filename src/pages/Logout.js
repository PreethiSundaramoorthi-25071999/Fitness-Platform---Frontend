// src/pages/LogoutPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logging out and redirect to login after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 1000); // Redirect after 2 seconds (you can adjust this time)
  }, [navigate]);

  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white p-8 shadow-md rounded-lg text-center">
           <h2 className="text-2xl font-bold text-indigo-600 mb-4">Logging out...</h2>
           <p className="text-gray-600">You are being logged out. Redirecting to login page...</p>
         </div>
        </div>
  );
};

export default Logout;
