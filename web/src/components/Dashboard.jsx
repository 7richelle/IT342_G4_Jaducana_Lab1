import React from "react";
import "../App.css";

const Dashboard = () => {
  // Get the logged-in user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome to your Dashboard!</h2>
        <p><strong>Username:</strong> {user.username || "N/A"}</p>
        <p><strong>Email:</strong> {user.email || "N/A"}</p>
      </div>
    </div>
  );
};

export default Dashboard;
