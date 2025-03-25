import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>AI-Powered Cancer Detection System</h1>
      <div className="buttons">
        <Link to="/doctor/login">
          <button>Doctor Login</button>
        </Link>
        <Link to="/patient">
          <button>Patient Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;