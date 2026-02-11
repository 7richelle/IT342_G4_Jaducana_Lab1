import React, { useState } from "react";
import Login from "./Login.jsx";
import "../App.css";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false); // after signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  const res = await fetch("http://localhost:8080/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const msg = await res.text();

 if (msg !== "User already existed") {
  navigate("/login"); // go to login page after successful registration
} else {
  setError(msg); // show error if user exists
}

};


  if (showLogin) {
    return <Login userData={formData} />; // pass registered data
  }

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
        <button type="button" className = "login-btn" onClick={() => navigate("/login")}>Log in</button>
      </form>
    </div>
  );
};

export default Register;
