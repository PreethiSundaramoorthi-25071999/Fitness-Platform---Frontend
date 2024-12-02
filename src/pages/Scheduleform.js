//2
import React, { useState } from 'react';

function ScheduleForm() {
  const [formData, setFormData] = useState({
    className: '',
    capacity: '',
    duration: '',
    date: '',
    time: '',
    period: 'AM'
  });

  const [message, setMessage] = useState(''); // State to store the message

  const classOptions = [
    'Yoga',
    'Strength Training',
    'Cardio',
    'Pilates',
    'HIIT',
    'Zumba',
    'Kickboxing',
    'Body Pump',
    'Aqua Aerobics',
    'Meditation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setMessage('Feature development is in process'); // Set the message on submit
  };

  return (
    <div className="container mx-28 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Schedule Class</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Class Name Dropdown */}
        <div className="mb-4">
          <label htmlFor="className" className="block text-gray-700 font-semibold mb-2">
            Class Name
          </label>
          <select
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          >
            <option value="">Select a Class</option>
            {classOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Capacity Input */}
        <div className="mb-4">
          <label htmlFor="capacity" className="block text-gray-700 font-semibold mb-2">
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        {/* Duration Input */}
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        {/* Time Input with AM/PM */}
        <div className="mb-4 flex items-center">
          <div className="w-2/3 mr-2">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="period" className="block text-gray-700 font-semibold mb-2">
              AM/PM
            </label>
            <select
              id="period"
              name="period"
              value={formData.period}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              required
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded font-semibold hover:bg-green-600"
        >
          Submit
        </button>
      </form>

      {/* Display Message */}
      {message && (
        <p className="text-center mt-4 text-blue-500 font-semibold">
          {message}
        </p>
      )}
    </div>
  );
}

export default ScheduleForm;
