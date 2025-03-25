import React, { useState } from 'react';
import UploadSection from './UploadSection';
import ResultsSection from './ResultsSection';
import Notification from './Notification';
import '../css/PatientDashboard.css'; // Add a separate CSS file for styling

function PatientDashboard() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [notification, setNotification] = useState('');
  const [history, setHistory] = useState([]); // State to store history of results

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Simulate AI analysis
    simulateAnalysis(selectedFile);
  };

  const simulateAnalysis = (file) => {
    // Simulate API call or AI processing
    setTimeout(() => {
      const newResult = { status: 'Malignant', confidence: '85%', date: new Date().toLocaleString() };
      setResult(newResult);
      setNotification('High risk detected. Please visit a doctor for further evaluation.');
      // Add the result to the history
      setHistory((prevHistory) => [newResult, ...prevHistory]);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>

      {/* Upload Section */}
      <UploadSection onFileChange={handleFileChange} />

      {/* Results Section */}
      {result && (
        <>
          <ResultsSection result={result} />
          {notification && <Notification message={notification} />}
        </>
      )}

      {/* History Section */}
      <div className="history-section">
        <h3>History of Checked Records</h3>
        {history.length === 0 ? (
          <p>No records found.</p>
        ) : (
          <ul>
            {history.map((record, index) => (
              <li key={index}>
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Status:</strong> {record.status}</p>
                <p><strong>Confidence:</strong> {record.confidence}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;