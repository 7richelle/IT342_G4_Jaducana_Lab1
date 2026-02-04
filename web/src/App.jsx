import { useState } from 'react'

import './App.css'
import Register from './Register.jsx'
import Login from './Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
      <Login />
    </>
  )
}

export default App
