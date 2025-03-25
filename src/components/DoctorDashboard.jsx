import React, { useState } from 'react';
import ResultsSection from './ResultsSection';
import Notification from './Notification';

function DoctorDashboard() {
  const [result, setResult] = useState({ status: 'Malignant', confidence: '85%' });
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    // Send verified result to the patient
  };

  return (
    <div className="dashboard">
      <h2>Doctor Dashboard</h2>
      <div className="patient-results">
        <ResultsSection result={result} />
        <button onClick={handleVerify} disabled={verified}>
          {verified ? 'Verified' : 'Verify Result'}
        </button>
        {verified && <Notification message="Result verified and sent to the patient." />}
      </div>
    </div>
  );
}

export default DoctorDashboard;