import React from 'react';
import { Outlet } from 'react-router-dom';
import MemberHeader from '../components/MemberHeader';
import Footer from '../components/Footer';

const MemberDashboard = () => {
  return (
    <div>
      {/* Include the Header */}
      <MemberHeader />
      
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

export default MemberDashboard;