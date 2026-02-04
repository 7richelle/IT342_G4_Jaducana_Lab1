import { useState } from 'react'

import './App.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import Dashboard from "./Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
     
    </>
  )
}

export default App
