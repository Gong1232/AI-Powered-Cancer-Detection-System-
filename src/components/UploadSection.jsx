import React from 'react';

function UploadSection({ onFileChange }) {
  return (
    <div className="upload-section">
      <h3>Upload Your X-RAY Image</h3>
      <input type="file" accept="image/*" onChange={onFileChange} />
    </div>
  );
}

export default UploadSection;