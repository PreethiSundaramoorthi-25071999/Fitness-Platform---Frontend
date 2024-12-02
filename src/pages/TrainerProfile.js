//last
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const trainers = [
  { "id": "3", "name": "Emma White", "qualifications": ["Certified Yoga Instructor"], "expertise": ["Yoga", "Meditation"], "rating": 4.9, "reviews": 25, yearsOfExperience: 10,
    feedback: ["Alex: Emma is amazing!"], "profilePic": "https://images.squarespace-cdn.com/content/v1/590beb9b893fc0ef1a3523e3/1658676352637-1K6JK547ZU2L928STUKM/Maria-21-Edit.jpg" },
  { "id": "4", "name": "David Green", "qualifications": ["Certified Personal Trainer"], "expertise": ["StrengthTraining", "Functional Fitness"], "rating": 4.7, "reviews": 18, yearsOfExperience: 5,
    feedback: ["Gloria: David Green is amazing!"], "profilePic": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  { "id": "5", "name": "Laura Black", "qualifications": ["Certified Pilates Instructor"], "expertise": ["Pilates", "Rehabilitation"], "rating": 4.8, "reviews": 20, yearsOfExperience: 11,
    feedback: ["Phil: Laura is amazing!"], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvh7Ok0Qi4gF2_UsSp6uAUx3NqAVbrKwQ&s" },
  { "id": "6", "name": "Mike Brown", "qualifications": ["Group Fitness Instructor"], "expertise": ["HIIT", "Cardio"], "rating": 4.6, "reviews": 15, yearsOfExperience: 4,
    feedback: ["Claire: Mike Brown is amazing!"], "profilePic": "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg" },
  { "id": "7", "name": "Sophie Adams", "qualifications": ["Zumba Certified"], "expertise": ["Dance Fitness", "Zumba"], "rating": 4.5, "reviews": 30, yearsOfExperience: 4,
    feedback: ["Rachel: Sophie Adams is amazing!"], "profilePic": "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA=" },
  { "id": "8", "name": "Chris Lee", "qualifications": ["Certified Kickboxing Trainer"], "expertise": ["Kickboxing", "Self-defense"], "rating": 4.7, "reviews": 22, yearsOfExperience: 7,
    feedback: ["Monica: Chris is amazing!"], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlwOf5j0fRPn0dJ8wHh__bhzvsdXj20VJTQ&s" },
  { "id": "9", "name": "Anna King", "qualifications": ["Aqua Fitness Instructor"], "expertise": ["AquaAerobics"], "rating": 4.9, "reviews": 10, yearsOfExperience: 8,
    feedback: ["Ross: Anna Kings is amazing!"], "profilePic": "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg" },
  { "id": "10", "name": "Tommy Hall", "qualifications": ["Strength Training Coach"], "expertise": ["BodyPump", "Weightlifting"], "rating": 4.6, "reviews": 16, yearsOfExperience: 10,
    feedback: ["Chandler: Tommy Hall is amazing!"], "profilePic": "https://imgcdn.stablediffusionweb.com/2024/4/21/dbc4f2c5-1ace-42b7-a474-5e93208a7b18.jpg" },
  { "id": "11", "name": "Rachel Taylor", "qualifications": ["Meditation Coach"], "expertise": ["Meditation", "Wellness"], "rating": 4.8, "reviews": 12, yearsOfExperience: 5,
    feedback: ["Joey: Rachel Taylor is amazing!"], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s" },
  { "id": "12", "name": "Kevin Harris", "qualifications": ["Personal Trainer"], "expertise": ["Endurance Training"], "rating": 4.5, "reviews": 14, yearsOfExperience: 6,
    feedback: ["Pheobe: Kevin Harris is amazing!"], "profilePic": "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" }
];

const TrainerList = () => {
  const [trainersState, setTrainersState] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null); // For modal
  const [newFeedback, setNewFeedback] = useState({});
  const [userNames, setUserNames] = useState({});
  const [expandedFeedback, setExpandedFeedback] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Success popup state

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("trainerFeedback")) || {};
    const updatedTrainers = trainers.map((trainer) => ({
      ...trainer,
      feedback: [...trainer.feedback, ...(storedFeedback[trainer.id] || [])],
    }));
    setTrainersState(updatedTrainers);
  }, []);

  const handleInputChange = (id, field, value) => {
    if (field === "name") {
      setUserNames((prev) => ({ ...prev, [id]: value }));
    } else if (field === "feedback") {
      setNewFeedback((prev) => ({ ...prev, [id]: value }));
    }
  };

  // const handleAddFeedback = async(id) => {
  //   const feedbackText = newFeedback[id]?.trim();
  //   const userName = userNames[id]?.trim();
    
  //   if (!feedbackText || !userName) return;

  //   const fullFeedback = `${userName}: ${feedbackText}`;
  //   setTrainersState((prevTrainers) =>
  //     prevTrainers.map((trainer) =>
  //       trainer.id === id
  //         ? { ...trainer, feedback: [...trainer.feedback, fullFeedback] }
  //         : trainer
  //     )
  //   );
    
  //   const storedFeedback = JSON.parse(localStorage.getItem("trainerFeedback")) || {};
  //   const updatedFeedback = {
  //     ...storedFeedback,
  //     [id]: [...(storedFeedback[id] || []), fullFeedback],
  //   };
  //   localStorage.setItem("trainerFeedback", JSON.stringify(updatedFeedback));

  //   setNewFeedback((prev) => ({ ...prev, [id]: "" }));
  //   setUserNames((prev) => ({ ...prev, [id]: "" }));

  //   // Show success popup
  //   setShowSuccessPopup(true);
  //   setTimeout(() => setShowSuccessPopup(false), 5000); // Hide after 5 seconds
  // };

  const handleAddFeedback = (id) => {
    const feedbackText = newFeedback[id]?.trim();
    const userName = userNames[id]?.trim();
  
    if (!feedbackText || !userName) return;
  
    const fullFeedback = `${userName}: ${feedbackText}`;
    let updatedTrainer = null;
  
    setTrainersState((prevTrainers) => {
      const updatedTrainers = prevTrainers.map((trainer) => {
        if (trainer.id === id) {
          updatedTrainer = { ...trainer, feedback: [...trainer.feedback, fullFeedback] };
          return updatedTrainer;
        }
        return trainer;
      });
  
      return updatedTrainers;
    });
  
    const storedFeedback = JSON.parse(localStorage.getItem("trainerFeedback")) || {};
    const updatedFeedback = {
      ...storedFeedback,
      [id]: [...(storedFeedback[id] || []), fullFeedback],
    };
    localStorage.setItem("trainerFeedback", JSON.stringify(updatedFeedback));
     // Update `selectedTrainer` with the updated trainer data
     if (selectedTrainer?.id === id && updatedTrainer) {
      setSelectedTrainer(updatedTrainer);
    }
  
    setNewFeedback((prev) => ({ ...prev, [id]: "" }));
    setUserNames((prev) => ({ ...prev, [id]: "" }));
  
    // Show success popup
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 5000); // Hide after 5 seconds
  };
  
  
  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  const toggleFeedbackView = (id) => {
    setExpandedFeedback((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Trainers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainersState.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={trainer.profilePic}
              alt={trainer.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{trainer.name}</h2>
            <p className="text-gray-600 text-sm mb-2">
              <i className="fas fa-star text-yellow-500"></i> Rating: {trainer.rating} (
              {trainer.reviews} reviews)
            </p>
            <button
              className="bg-blue-600 text-white py-1 px-8 rounded hover:bg-blue-700 transition duration-300"
              onClick={() => openModal(trainer)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="text-red-500 font-bold float-right"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedTrainer.profilePic}
              alt={selectedTrainer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          
            <h2 className="text-xl font-semibold text-center">{selectedTrainer.name}</h2>
            <p className="text-gray-600 text-sm mb-2 text-center">
              Expertise: {selectedTrainer.expertise.join(", ")}
            </p>
            <ul className="text-gray-500 text-sm list-disc pl-5 mb-4 text-center">
              <li>Qualifications: {selectedTrainer.qualifications.join(", ")}</li>
            </ul>
            <div>
              <h3 className="font-semibold mb-2">Client Feedback:</h3>
              <ul className="text-gray-700 text-sm list-disc pl-5 mb-4">
                {(expandedFeedback[selectedTrainer.id]
                  ? selectedTrainer.feedback
                  : selectedTrainer.feedback.slice(0, 3)
                ).map((fb, index) => (
                  <li key={index}>{fb}</li>
                ))}
              </ul>
              {selectedTrainer.feedback.length > 3 && (
                <button
                  className="text-blue-500 text-sm"
                  onClick={() => toggleFeedbackView(selectedTrainer.id)}
                >
                  {expandedFeedback[selectedTrainer.id] ? "View Less" : "View More"}
                </button>
              )}
              <input
                type="text"
                value={userNames[selectedTrainer.id] || ""}
                onChange={(e) =>
                  handleInputChange(selectedTrainer.id, "name", e.target.value)
                }
                placeholder="Your Name"
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                value={newFeedback[selectedTrainer.id] || ""}
                onChange={(e) =>
                  handleInputChange(selectedTrainer.id, "feedback", e.target.value)
                }
                placeholder="Add your feedback..."
                className="w-full p-2 border rounded mb-2"
              ></textarea>
              <button
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => handleAddFeedback(selectedTrainer.id)}
              >
                Add Feedback
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="fixed right-32 top-1/2 transform -translate-y-1/2 bg-green-800 text-white px-6 py-4 rounded shadow-lg w-64 text-center">
          <h3 className="text-lg font-semibold mb-2">Feedback Submitted</h3>
          <p className="text-sm">Click "View Details" again to see the entered feedback.</p>
        </div>
      )}

    </div>
  );
};

export default TrainerList;