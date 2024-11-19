import React, { useEffect, useState } from 'react';
import './Notification.css';

function Notification({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose(); // Trigger the onClose callback when hiding
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={() => setIsVisible(false)} className="close-btn">&times;</button>
    </div>
  );
}

export default Notification;
