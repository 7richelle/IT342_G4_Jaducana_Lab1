import React from "react";
import "../App.css";
import Login from "./Login.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // Get the logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
const handleLogout = () => {
  localStorage.removeItem("user"); // remove logged-in user
  navigate("/login"); // redirect to login
};

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome to your Dashboard!</h2>
        <p><strong>Username:</strong> {user.username || "N/A"}</p>
        <p><strong>Email:</strong> {user.email || "N/A"}</p>
        <button type="button" className="login-btn" onClick={handleLogout}>Log out</button>

      </div>
      
    </div>
  );
};

export default Dashboard;
