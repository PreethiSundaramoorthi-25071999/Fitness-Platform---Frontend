import React from 'react';

// import { Link } from 'react-router-dom';
// 
import ClassCard from '../components/ClassCard';

const Home = ({ classes }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8">Welcome to Fitness Platform</h1>
      <p className="text-center text-gray-600 mt-4">Find the best fitness classes and trainers near you.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {classes.map(fitnessClass => (
          <ClassCard key={fitnessClass._id} fitnessClass={fitnessClass} />
        ))}
      </div>
    </div>
  );
};

export default Home;
