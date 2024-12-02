
//renew
import React, { useState } from "react";

const trainers = [
  { "id": "3", "name": "Emma White", "qualifications": ["Certified Yoga Instructor"], "expertise": ["Yoga", "Meditation"], "rating": 4.9, "reviews": 25, yearsOfExperience: 10,
    feedback: ["Emma is amazing!", "Her sessions are so calming."], "profilePic": "https://images.squarespace-cdn.com/content/v1/590beb9b893fc0ef1a3523e3/1658676352637-1K6JK547ZU2L928STUKM/Maria-21-Edit.jpg" },
  { "id": "4", "name": "David Green", "qualifications": ["Certified Personal Trainer"], "expertise": ["StrengthTraining", "Functional Fitness"], "rating": 4.7, "reviews": 18, yearsOfExperience: 5,
    feedback: ["David Green is amazing!", "His sessions are so calming."], "profilePic": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
  { "id": "5", "name": "Laura Black", "qualifications": ["Certified Pilates Instructor"], "expertise": ["Pilates", "Rehabilitation"], "rating": 4.8, "reviews": 20, yearsOfExperience: 11,
    feedback: ["Laura is amazing!", "Her sessions are so calming."], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvh7Ok0Qi4gF2_UsSp6uAUx3NqAVbrKwQ&s" },
  { "id": "6", "name": "Mike Brown", "qualifications": ["Group Fitness Instructor"], "expertise": ["HIIT", "Cardio"], "rating": 4.6, "reviews": 15, yearsOfExperience: 4,
    feedback: ["Mike Brown is amazing!", "His sessions are so calming."], "profilePic": "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg" },
  { "id": "7", "name": "Sophie Adams", "qualifications": ["Zumba Certified"], "expertise": ["DanceFitness", "Zumba"], "rating": 4.5, "reviews": 30, yearsOfExperience: 4,
    feedback: ["Sophie Adams is amazing!", "Her sessions are so calming."], "profilePic": "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA=" },
  { "id": "8", "name": "Chris Lee", "qualifications": ["Certified Kickboxing Trainer"], "expertise": ["Kickboxing", "Self-defense"], "rating": 4.7, "reviews": 22, yearsOfExperience: 7,
    feedback: ["Chris is amazing!", "His sessions are so calming."], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlwOf5j0fRPn0dJ8wHh__bhzvsdXj20VJTQ&s" },
  { "id": "9", "name": "Anna King", "qualifications": ["Aqua Fitness Instructor"], "expertise": ["AquaAerobics"], "rating": 4.9, "reviews": 10, yearsOfExperience: 8,
    feedback: ["Anna Kings is amazing!", "His sessions are so calming."], "profilePic": "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg" },
  { "id": "10", "name": "Tommy Hall", "qualifications": ["Strength Training Coach"], "expertise": ["BodyPump", "Weightlifting"], "rating": 4.6, "reviews": 16, yearsOfExperience: 10,
    feedback: ["Tommy Hall is amazing!", "His sessions are so calming."], "profilePic": "https://imgcdn.stablediffusionweb.com/2024/4/21/dbc4f2c5-1ace-42b7-a474-5e93208a7b18.jpg" },
  { "id": "11", "name": "Rachel Taylor", "qualifications": ["Meditation Coach"], "expertise": ["Meditation", "Wellness"], "rating": 4.8, "reviews": 12, yearsOfExperience: 5,
    feedback: ["Rachel Taylor is amazing!", "Her sessions are so calming."], "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s" },
  { "id": "12", "name": "Kevin Harris", "qualifications": ["Personal Trainer"], "expertise": ["Endurance Training"], "rating": 4.5, "reviews": 14, yearsOfExperience: 6,
    feedback: ["Kevin Harris is amazing!", "His sessions are so calming."], "profilePic": "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" }
];

const classPreferences = {
  Yoga: {
    description: "Yoga helps improve flexibility and reduces stress.",
    benefits: [
      "Improves strength, balance, and flexibility.",
      "Helps with back pain relief.",
      "Eases arthritis symptoms.",
      "Benefits heart health.",
      "Promotes better self-care.",
      "Improves sleep quality.",
      "Reduces stress.",
      "Boosts energy and mood.",
      "Connects you with a supportive community.",
    ],
  },
  HIIT: {
    description: "HIIT boosts cardiovascular fitness and burns calories quickly.",
    benefits: [
      "Improves stamina.",
      "Increases strength.",
      "Burns lots of fat during workouts.",
      "Promotes post-workout fat burning.",
      "Keeps your heart healthy.",
      "Strengthens bones.",
      "Relieves stress.",
      "Keeps you younger.",
    ],
  },
  Meditation: {
    description: "Meditation promotes mental clarity and emotional health.",
    benefits: [
      "Stress Reduction.", 
      "Controls Anxiety." ,
      "Promotion of Emotional Health." ,
      "Self-Awareness Enhancement.", 
      "Attention Span Becomes Lengthened.",
      "Age-Related Memory Loss May be Reduced.", 
      "Helps to Generate Kindness.",
      "Can Help to Fight Addictions."
    ]
  },
  StrengthTraining : {
    description: "Build muscle and improve bone density with strength training.",
    benefits : [
      "Increases Muscle Tone.",
      "Improves Functional Strength.",
      "Helps Control Blood Sugar.",
      "Improves Heart Health.",
      "Strengthens Bones.",
      "Enhances Mobility and Flexibility.",
      "Boosts Metabolism.",
      "Reduces Blood Pressure."
    ]
  },
  Pilates : {
    description: "Pilates enhances core strength and improves posture.",
    benefits : [
      "Increases Overall Muscle Strength.",
      "Improves Flexibility.",
      "Strengthens Your Core.",
      "Improves Posture.",
      "Improves Sports Performance.",
      "Improves Confidence – Look Better, Feel Better.",
      "Reduces The Incidence Of Lower Back Pain.",
      "Improves Pelvic Floor Health."
    ]
  },
  Zumba : {
    description: "Dance your way to fitness with Zumba.",
    benefits : [
      "It's fun. You'll enjoy the entire journey.",
      "Great for weight loss.",
      "Tones your entire body.",
      "Boosts your heart health.", 
      "Helps you de-stress.", 
      "Improves coordination.", 
      "Makes you happy.",
      "Improves Flexibility."
    ]
  },
  AquaAerobics : {
    description: "Low impact exercises in water are great for joint health.",
    benefits : [
      "Helps build strength.",
      "Helps with the Recovery of injuries.",
      "Lowers High blood pressure.",
      "Enhances balance and coordination.",
      "Reduces Stress, Anxiety and helps with Insomnia.",
      "Helps with Pain & Health Problems.",
      "Increases Endurance.",
      "Helps with Weight Loss."
    ]
  },  
  Kickboxing : {
    description: "Improve self-defense skills and stamina with kickboxing.",
    benefits : [
      "Improves overall fitness level.",
      "Boosts heart health.",
      "Improves Balance and Coordination.",
      "Relieves Stress and Anxiety.",
      "Improves Muscle and Bone Health.",
      "Enhances Self Esteem and Confidence.",
      "Burns Calories and promotes Weight Loss.",
      "Improved Mental Health."
    ]
  },

  
};
// const classPreferences = {
//   Yoga: "Yoga helps improve flexibility and reduces stress.",
//   HIIT: "HIIT boosts cardiovascular fitness and burns calories quickly.",
//   Meditation: "Meditation promotes mental clarity and emotional health.",
//   StrengthTraining: "Build muscle and improve bone density with strength training.",
//   Pilates: "Pilates enhances core strength and improves posture.",
//   Zumba: "Dance your way to fitness with Zumba.",
//   AquaAerobics: "Low impact exercises in water are great for joint health.",
//   Kickboxing: "Improve self-defense skills and stamina with kickboxing.",
// };
function RecommendationForm() {
  const [selectedPreference, setSelectedPreference] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreferenceChange = (event) => {
    const preference = event.target.value;
    setSelectedPreference(preference);

    const recommendedTrainers = trainers.filter((trainer) =>
      trainer.expertise.includes(preference)
    );
    setRecommendations(recommendedTrainers);
  };

  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrainer(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Class Recommendation</h1>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Section: Dropdown */}
        <div className="w-full sm:w-1/2">
          <label htmlFor="classPreference" className="block text-xl font-bold mb-2">
            Select Your Class Preference:
          </label>
          <select
            id="classPreference"
            value={selectedPreference}
            onChange={handlePreferenceChange}
            className="w-full border rounded p-2"
          >
            <option value="">-- Select a Class --</option>
            {Object.entries(classPreferences).map(([preference, details]) => (
              <option key={preference} value={preference}>
                {preference} - {details.description}
              </option>
            ))}
          </select>
        </div>

        {/* Right Section: Benefits */}
        <div className="w-full sm:w-1/2">
          {selectedPreference && classPreferences[selectedPreference]?.benefits && (
            <div className="border p-4 rounded shadow-md bg-white">
              <h2 className="text-xl font-bold mb-2">Benefits of {selectedPreference}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {classPreferences[selectedPreference].benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Recommended Trainers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((trainer) => (
              <div
                key={trainer.id}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center"
              >
                <img
                  src={trainer.profilePic}
                  alt={trainer.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{trainer.name}</h3>
                <p className="text-sm text-gray-600">
                  Expertise: {trainer.expertise.join(", ")}
                </p>
                <p className="text-sm text-gray-600">★ Rating: {trainer.rating}</p>
                <p className="text-sm text-gray-600">
                  Experience: {trainer.yearsOfExperience} years
                </p>
                <button
                  onClick={() => openModal(trainer)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && selectedTrainer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black hover:text-gray-700 font-bold"
            >
              ✖
            </button>
            <img
              src={selectedTrainer.profilePic}
              alt={selectedTrainer.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">{selectedTrainer.name}</h3>
            <p className="text-center text-gray-600 mb-4">
              Qualifications: {selectedTrainer.qualifications.join(", ")}
            </p>
            <p>
              <strong>Expertise:</strong> {selectedTrainer.expertise.join(", ")}
            </p>
            <p>
              <strong>Rating:</strong> ★ {selectedTrainer.rating}
            </p>
            <p>
              <strong>Years of Experience:</strong> {selectedTrainer.yearsOfExperience} years
            </p>
            <p>
              <strong>Client Feedback:</strong>
            </p>
            <ul className="list-disc list-inside">
              {selectedTrainer.feedback.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
            <div className="text-center mt-4">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecommendationForm;
