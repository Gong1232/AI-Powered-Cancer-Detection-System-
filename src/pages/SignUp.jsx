import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const DoctorLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ 
    email: '', 
    password: '',
    userType: 'patient', // Default to patient
    certificate: null
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate fields based on user type
    if (!credentials.email || !credentials.password) {
      setError('Email and password are required');
      return;
    }

    if (credentials.userType === 'doctor' && !credentials.certificate) {
      setError('Medical certificate is required for doctors');
      return;
    }

    onLogin();
    navigate(credentials.userType === 'doctor' ? '/doctor/dashboard' : '/patient/dashboard');
  };

  const handleFileChange = (e) => {
    setCredentials({
      ...credentials,
      certificate: e.target.files[0]
    });
  };

  return (
    <div className="login-container">
      <h2>Medical Portal Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              name="userType"
              value="patient"
              checked={credentials.userType === 'patient'}
              onChange={() => setCredentials({...credentials, userType: 'patient'})}
            />
            Patient
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="doctor"
              checked={credentials.userType === 'doctor'}
              onChange={() => setCredentials({...credentials, userType: 'doctor'})}
            />
            Doctor
          </label>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          required
        />

        {credentials.userType === 'doctor' && (
          <div className="certificate-upload">
            <label>Medical Certificate (PDF/Image):</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              required={credentials.userType === 'doctor'}
            />
            <small>Upload your medical license or certification</small>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <div className="form-actions">
          <button type="submit">Sign In</button>
          <Link to="/">
            <button type="button" className="cancel-button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DoctorLogin;