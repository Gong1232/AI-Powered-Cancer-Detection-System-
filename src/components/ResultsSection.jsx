import React from 'react';

function ResultsSection({ result }) {
  return (
    <div className="results-section">
      <h3>Analysis Results</h3>
      <p>Status: <strong>{result.status}</strong></p>
      <p>Confidence: <strong>{result.confidence}</strong></p>
    </div>
  );
}

export default ResultsSection;