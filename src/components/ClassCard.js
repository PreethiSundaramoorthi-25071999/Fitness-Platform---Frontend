import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({ fitnessClass }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="text-xl font-bold">{fitnessClass.title}</h3>
      <p className="text-gray-600">{fitnessClass.description}</p>
      <p className="text-sm text-gray-500">Duration: {fitnessClass.duration} mins</p>
      <p className="text-sm text-gray-500">Date: {new Date(fitnessClass.date).toLocaleDateString()}</p>
      <Link to={`/classes/${fitnessClass._id}`} className="bg-blue-600 text-white px-4 py-2 rounded mt-2 inline-block">
        Book Now
      </Link>
    </div>
  );
};

export default ClassCard;
