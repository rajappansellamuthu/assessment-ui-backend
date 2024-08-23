import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserList() {
    const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/users");
        setUsers(response.data);
      } catch (error) {
        alert("Failed to fetch users!");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <button
        onClick={() => navigateToPage('/')}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
      >
       Back
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Email</th>
              
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{user.firstName}</td>
                <td className="py-3 px-6 text-left">{user.lastName}</td>
                <td className="py-3 px-6 text-left">{user.role}</td>
                <td className="py-3 px-6 text-left">{user.mobileNo}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
