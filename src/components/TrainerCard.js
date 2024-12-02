import React from 'react';

const TrainerCard = ({ trainer }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={trainer.photo} alt={trainer.name} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-4">{trainer.name}</h2>
      <p className="text-center text-gray-600">{trainer.specialization}</p>
    </div>
  );
};

export default TrainerCard;
