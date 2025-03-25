import React from 'react';

function Notification({ message }) {
  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
}

export default Notification;