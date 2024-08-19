import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
import './App.css'

const App = () => {
  const user = {
    name: 'Arun',
    email: 'arun1@gmail.com',
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          // LoginScreen
          <h2>Login screen</h2>
        ) : (
          <Routes>
            {/* <Route path='/profile' element={} /> */}
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
