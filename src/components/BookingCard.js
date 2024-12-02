import React from 'react';

const BookingCard = ({ booking }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="text-xl font-bold">{booking.class.title}</h3>
      <p className="text-gray-600">Date: {new Date(booking.class.date).toLocaleDateString()}</p>
      <p className="text-gray-600">Status: {booking.status}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded mt-2">Cancel Booking</button>
    </div>
  );
};

export default BookingCard;
