
//next
import React, { useState } from 'react';
import { CiTimer } from 'react-icons/ci';
import { MdOutlineReduceCapacity } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Booking data and imageMap (same as provided above)
export const bookings = [
  { "id": "101", "trainerId": "3", "type": "Yoga", "duration": "60 min", "schedule": ["2024-11-11T09:00:00Z"], "capacity": 10, "availableSpots": 5 },
  { "id": "102", "trainerId": "4", "type": "Strength Training", "duration": "45 min", "schedule": ["2024-11-06T18:00:00Z"], "capacity": 12, "availableSpots": 2 },
  { "id": "103", "trainerId": "5", "type": "Cardio", "duration": "30 min", "schedule": ["2024-11-05T17:00:00Z"], "capacity": 15, "availableSpots": 0 },
  { "id": "104", "trainerId": "3", "type": "Pilates", "duration": "60 min", "schedule": ["2024-11-06T10:00:00Z"], "capacity": 8, "availableSpots": 4 },
  { "id": "105", "trainerId": "4", "type": "HIIT", "duration": "30 min", "schedule": ["2024-11-07T19:00:00Z"], "capacity": 20, "availableSpots": 15 },
  { "id": "106", "trainerId": "5", "type": "Zumba", "duration": "45 min", "schedule": ["2024-11-08T18:00:00Z"], "capacity": 15, "availableSpots": 5 },
  { "id": "107", "trainerId": "3", "type": "Kickboxing", "duration": "60 min", "schedule": ["2024-11-09T17:00:00Z"], "capacity": 10, "availableSpots": 3 },
  { "id": "108", "trainerId": "4", "type": "Body Pump", "duration": "45 min", "schedule": ["2024-11-10T16:00:00Z"], "capacity": 12, "availableSpots": 6 },
  { "id": "109", "trainerId": "5", "type": "Aqua Aerobics", "duration": "50 min", "schedule": ["2024-11-11T15:00:00Z"], "capacity": 10, "availableSpots": 0 },
  { "id": "110", "trainerId": "3", "type": "Meditation", "duration": "30 min", "schedule": ["2024-11-12T08:00:00Z"], "capacity": 20, "availableSpots": 20 }
];

// Image map for different class types
const imageMap = {
  "Yoga": "https://i0.wp.com/krct.ac.in/blog/wp-content/uploads/2024/06/3-5.png?resize=760%2C486&ssl=1",
  "Strength Training": "https://www.mensjournal.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM3Mjk2NTQ5NTIwNTI5/_main_liftlift.jpg",
  "Cardio": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg",
  "Pilates": "https://www.verywellhealth.com/thmb/XwXC4jfVxm8eWikThkDOXz3r9o0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1468575157-7686b4645ff14c0586a07c478e2f7fee.jpg",
  "HIIT": "https://res.cloudinary.com/hydrow/image/upload/f_auto/w_1000/q_100/v1715087676/Blog/what-are-the-benefits-of-hiit-training.jpg",
  "Zumba": "https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg",
  "Kickboxing": "https://strikingclinicbanbury.com/cdn/shop/articles/kickboxing_in_ufc.jpg?v=1705926939&width=1100",
  "Body Pump": "https://fitnessproject.us/wp-content/uploads/2020/07/9H7A1626.jpg-Body-Pump.jpg",
  "Aqua Aerobics": "https://static.toiimg.com/thumb/imgsize-229771,msid-68800180,width-400,resizemode-4/68800180.jpg",
  "Meditation": "https://www.verywellhealth.com/thmb/ws80F7h63fhNoGCiz-HVd8rt98g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/meditating-woman-56a792a05f9b58b7d0ebce12.jpg"
};

function BookaClass() {
  // State to hold selected date, time, and AM/PM for each class
  const [selectedDateTime, setSelectedDateTime] = useState({});
  // State to hold the upcoming booked classes
  const [upcomingClasses, setUpcomingClasses] = useState([]);

  const handleDateChange = (classId, date) => {
    setSelectedDateTime((prevState) => ({
      ...prevState,
      [classId]: { ...prevState[classId], selectedDate: date },
    }));
  };

  const handleTimeChange = (classId, time) => {
    setSelectedDateTime((prevState) => ({
      ...prevState,
      [classId]: { ...prevState[classId], selectedTime: time },
    }));
  };

  const handleAmPmChange = (classId, amPm) => {    
    setSelectedDateTime((prevState) => ({
      ...prevState,
      [classId]: { ...prevState[classId], selectedAmPm: amPm },
    }));
  };

  const handleSubmit = (classId) => {
    const { selectedDate, selectedTime, selectedAmPm } = selectedDateTime[classId] || {};
    let amPmValue = selectedAmPm ?? "AM";
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time!');
      return;
    }

    // Store the booking details in upcomingClasses
    const bookedClass = {
      ...bookings.find((classItem) => classItem.id === classId),
      selectedDate,
      selectedTime,
      amPmValue
    };
    //
    console.log(bookedClass)
    let myBookings = JSON.parse(localStorage.getItem("mybookings")) || [];

// Using the spread operator to create a new array and add bookedClass
myBookings = [...myBookings, bookedClass];

// Save the updated array back to localStorage
localStorage.setItem("mybookings", JSON.stringify(myBookings));
    //
    setUpcomingClasses((prevClasses) => [...prevClasses, bookedClass]);

    alert(`Class booked for ${selectedDate.toLocaleDateString()} at ${selectedTime} ${amPmValue} , Check "My Bookings" page to view the booked class`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Class</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((classItem) => (
          <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img
              src={imageMap[classItem.type]}
              alt={classItem.type}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <CiTimer className="mr-2" /> Duration: {classItem.duration}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <MdOutlineReduceCapacity className="mr-2" /> Capacity: {classItem.capacity}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <BsFillPeopleFill className="mr-2" /> Available Spots: {classItem.availableSpots}
            </p>
            <div className="text-gray-600 mb-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaRegCalendarAlt className="mr-2" /> Schedule:
              </h3>
              <div className="mb-4">
                <label htmlFor="date" className="font-semibold text-blue-900">
                  Select Date:
                </label>
                <DatePicker
                  selected={selectedDateTime[classItem.id]?.selectedDate}
                  onChange={(date) => handleDateChange(classItem.id, date)}
                  className="border p-2 rounded-md w-full mt-2"
                  placeholderText="Click to select a date"
                  dateFormat="MM/dd/yyyy"
                  minDate={new Date()}
                />
              </div>
              {selectedDateTime[classItem.id]?.selectedDate && (
                <div className="mt-4">
                  <label htmlFor="time" className="font-semibold text-gray-700">
                    Enter Time:
                  </label>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      id="time"
                      type="time"
                      placeholder="hh:mm"
                      className="border p-2 rounded-md w-2/3"
                      value={selectedDateTime[classItem.id]?.selectedTime || ''}
                      onChange={(e) => handleTimeChange(classItem.id, e.target.value)}
                    />
                    <select
                      className="border p-2 rounded-md"
                      value={selectedDateTime[classItem.id]?.selectedAmPm || 'AM'}
                      onChange={(e) => handleAmPmChange(classItem.id, e.target.value)}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            {selectedDateTime[classItem.id]?.selectedDate && selectedDateTime[classItem.id]?.selectedTime && (
              <button
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded font-semibold hover:bg-blue-600"
                onClick={() => handleSubmit(classItem.id)}
              >
                Confirm Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookaClass;


