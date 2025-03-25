import React from 'react';
import PatientDashboard from '../components/PatientDashboard';

function PatientPage() {
  return (
    <div className="page">
      <h1>Remote AI Cancer Screening</h1>
      <PatientDashboard />
    </div>
  );
}

export default PatientPage;