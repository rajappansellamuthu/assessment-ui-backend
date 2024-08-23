import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/signup", formData);
      alert("User registered successfully!");
    } catch (error) {
      alert("User registration failed!");
    }
  };

  return (
    <div className=" mt-14">
          <button
        onClick={() => navigateToPage('/')}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
       Back
      </button>
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Signup</h2>

      {/* First Name */}
      <input
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Last Name */}
      <input
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Email */}
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Mobile No */}
      <input
        name="mobileNo"
        placeholder="Mobile No"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Role */}
      <select
        name="role"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Role</option>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Guest">Guest</option>
      </select>

      {/* Password */}
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Signup Button */}
      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Signup
      </button>
    </form>
    </div>
  );
}

export default Signup;
