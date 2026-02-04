import React, { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import "./App.css";

const Login = ({ userData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (email !== userData.email || password !== userData.password) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    setShowDashboard(true); // go to dashboard
  };

  if (showDashboard) {
    return <Dashboard username={userData.username} email={userData.email} />;
  }

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
