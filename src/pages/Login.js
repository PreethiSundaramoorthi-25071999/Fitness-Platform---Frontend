
// //2
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaDumbbell } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://fitness-platform-backend.onrender.com/api/users/login", { email, password });
      console.log(data)
      localStorage.setItem('token', data.token);
      // localStorage.setItem('role', data.role);
      if (data) {
        setTimeout(() => {
            if (data?.role === 'member') {
                navigate('/MemberDashboard');
            } else if (data?.role === 'trainer') {
                navigate('/TrainerDashboard');
            }
        },1000);
    }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Fitness Platform Header */}
      <header className="bg-blue-600 text-white flex py-4 px-6 text-left text-2xl font-bold items-center">
      <FaDumbbell className="mr-2" /> {/* Dumbbell icon with margin */}
        Fitness Platform
      </header>
      
      <h1 className="text-2xl font-bold text-center mt-8">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-600 text-white w-full py-2 mb-4">Login</button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
      </p>
    </div>
  );
};

export default Login;



// //2
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaDumbbell } from "react-icons/fa6";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('https://online-fitness-platform-backend.onrender.com/api/users/login', { email, password });
//       console.log(data);

//       // Store the token in local storage
//       localStorage.setItem('token', data.token);

//       // Redirect based on user role
//       if (data?.role === 'member') {
//         navigate('/MemberDashboard');
//       } else if (data?.role === 'trainer') {
//         navigate('/TrainerDashboard');
//       } else {
//         console.error("Unknown role: ", data?.role);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       {/* Fitness Platform Header */}
//       <header className="bg-blue-600 text-white flex py-4 px-6 text-left text-2xl font-bold items-center">
//         <FaDumbbell className="mr-2" /> {/* Dumbbell icon with margin */}
//         Fitness Platform
//       </header>
      
//       <h1 className="text-2xl font-bold text-center mt-8">Login</h1>
//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
//         <input
//           type="email"
//           placeholder="Email"
//           className="border w-full p-2 mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border w-full p-2 mb-4"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="bg-green-600 text-white w-full py-2 mb-4">Login</button>
//       </form>
//       <p className="text-center text-gray-600 mt-4">
//         Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
