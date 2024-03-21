import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudHome from './components/StudHome'; 
import IssuerHome from './components/IssuerHome';
import Login from './components/Login';
import './styles/globals.css';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    setUser({ role: role });
    // No navigation code here, we'll use the Routes to handle it
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        
         <Route path="/studhome" element={<StudHome/>} />
         <Route path="/issuerHome" element={<IssuerHome/>} />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
}
