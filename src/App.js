import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import UserList from "./UserList";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      
      </Routes>
    </Router>
  );
}

export default App;
