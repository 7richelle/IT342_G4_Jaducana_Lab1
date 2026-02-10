import { useState } from 'react'

import './App.css'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Dashboard from "./components/Dashboard.jsx";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;

