import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // This is the crucial import
import { useNavigate } from 'react-router-dom';

const DoctorLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      onLogin();
      navigate('/doctor/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Doctor Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Doctor Email"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default DoctorLogin;