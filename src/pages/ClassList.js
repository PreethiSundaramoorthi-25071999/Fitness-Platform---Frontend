
//new
import React, { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

const initialBookings = [
  {
    id: "107",
    trainerId: "3",
    type: "Kickboxing",
    duration: "60 min",
    schedule: ["2024-11-09T17:00:00Z"],
    capacity: 10,
    availableSpots: 3,
  },
];

function ClassList() {
  // const [bookings, setBookings] = useState(initialBookings);
  const [bookings] = useState([]);
  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [timePeriod, setTimePeriod] = useState("AM"); // AM/PM state
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchBookings = () => {
      let myBookings = JSON.parse(localStorage.getItem("mybookings")) || [];

      myBookings = Array.isArray(myBookings) ? myBookings : [];
      const uniqueMyBookings = myBookings.filter(
        (booking, index, self) =>
          index === self.findIndex((b) => b.id === booking.id)
      );

      const updatedBookList = [
        ...bookings,
        ...uniqueMyBookings.filter(
          (newBooking) =>
            !bookings.some(
              (existingBooking) => existingBooking.id === newBooking.id
            )
        ),
      ];

      setBookList(updatedBookList);
    };

    fetchBookings();
  }, [bookings]);

  const handleDelete = (id) => {
    const updatedBookList = bookList.filter((booking) => booking.id !== id);
    setBookList(updatedBookList);

    const storedBookings = JSON.parse(localStorage.getItem("mybookings")) || [];
    const updatedStoredBookings = storedBookings.filter(
      (booking) => booking.id !== id
    );
    localStorage.setItem("mybookings", JSON.stringify(updatedStoredBookings));
  };

  const handleReschedule = (id) => {
    if (newDate && newTime) {
      // Convert time to 24-hour format based on AM/PM selection
      const [hours, minutes] = newTime.split(":").map(Number);
      const formattedHours =
        timePeriod === "PM" && hours < 12
          ? hours + 12
          : timePeriod === "AM" && hours === 12
          ? 0
          : hours;

      const formattedTime = `${String(formattedHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:00`;

      const updatedBookList = bookList.map((booking) =>
        booking.id === id
          ? { ...booking, schedule: [`${newDate}T${formattedTime}`] }
          : booking
      );
      setBookList(updatedBookList);

      localStorage.setItem("mybookings", JSON.stringify(updatedBookList));

      setRescheduleId(null);
      setNewDate("");
      setNewTime("");
      setTimePeriod("AM");
    } else {
      alert("Please select both a date and time.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Classes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookList.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <CiTimer className="mr-2" /> Duration: {classItem.duration}
            </p>
            <div className="text-gray-600 mb-2">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaRegCalendarAlt className="mr-2" /> Timing:
              </h3>
              <div>
                {classItem.schedule.map((date, index) => (
                  <p key={index} className="text-gray-800">
                    {new Date(date).toLocaleDateString()}{" "}
                    {new Date(date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                ))}
              </div>
            </div>

            {rescheduleId === classItem.id && (
              <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold">New Date</label>
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
                />
                <label className="block mb-2 text-sm font-semibold">New Time</label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1"
                  />
                  <select
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded font-semibold hover:bg-blue-600 mr-2"
                  onClick={() => handleReschedule(classItem.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded font-semibold hover:bg-gray-400"
                  onClick={() => setRescheduleId(null)}
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded font-semibold hover:bg-green-600"
                onClick={() => setRescheduleId(classItem.id)}
              >
                Reschedule
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded font-semibold hover:bg-red-600"
                onClick={() => handleDelete(classItem.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassList;
