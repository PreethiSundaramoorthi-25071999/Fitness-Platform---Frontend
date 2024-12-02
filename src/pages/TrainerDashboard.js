import React from 'react';
import { Outlet } from 'react-router-dom';
import TrainerHeader from '../components/TrainerHeader';
import Footer from '../components/Footer';

const TrainerDashboard = () => {
  return (
    <div>
      {/* Include the Header */}
      <TrainerHeader />
      
      <main className="bg-gray-100 min-h-screen  flex-col items-center py-6">
        {/* Outlet will render the nested routes like /classes, /bookings, etc. */}
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </main>

      {/* Include the Footer */}
      <Footer />
    </div>
  );
};

export default TrainerDashboard;
