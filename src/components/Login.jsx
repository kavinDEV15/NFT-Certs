import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Login.css';
import '../styles/Home.css';

export default function Login() {
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Hook to control navigation

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (role === 'student') {
      navigate('/studhome'); // Navigate to the path for student home
    }

    if (role === 'issuer') {
      navigate('/issuerHome'); // Navigate to the path for student home
    }

    // Add additional conditions for other roles if needed
  };

  return (
    <div className="login-container">
       <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NFT CERTS
              </a>
            </span>
            {" "}by PSG-CT
          </h1>
      <h1>Login as:</h1>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={() => setRole('student')}>Student</button>
        <button type="button" onClick={() => setRole('issuer')}>Issuer</button>
        <button type="button" onClick={() => setRole('verifier')}>Verifier</button>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
