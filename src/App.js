import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { auth, db } from "./firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";


import Home from './pages/Home';
import DoctorLogin from './pages/DoctorLogin'; // New component
import DoctorDashboard from './pages/DoctorDashboard'; // Renamed from DoctorPage
import PatientPage from './pages/PatientPage';
import SignUp from './pages/SignUp'
import './App.css';

function App() {
  const [isDoctorAuthenticated, setIsDoctorAuthenticated] = React.useState(false);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/doctor/login">Doctor Dashboard</Link>
        <Link to="/patient">Patient Dashboard</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor/login" element={
          <DoctorLogin onLogin={() => setIsDoctorAuthenticated(true)} />
        } />
        
        <Route path="/doctor/dashboard" element={
          isDoctorAuthenticated ? (
            <DoctorDashboard />
          ) : (
            <Navigate to="/doctor/login" />
          )
        } />
        
        {/* Patient Route */}
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/signup" element={<SignUp />} />

        

      </Routes>
    </Router>
  );
}

export default App;