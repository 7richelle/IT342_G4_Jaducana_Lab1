import React from "react";
import "./App.css";

const Dashboard = ({ username, email }) => {
  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome to your Dashboard!</h2>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Dashboard;
