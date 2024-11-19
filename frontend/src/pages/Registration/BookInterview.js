import React, { useState } from 'react';
import './BookInterviewPage.css'; // Import the CSS file

function BookInterviewPage({ userFullName }) {
  const [interviewType, setInterviewType] = useState('online');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for booking the interview (could involve an API call or backend integration)
    alert(`Interview booked for ${userFullName} on ${selectedDate} at ${selectedTime} for a ${interviewType} interview.`);
  };

  return (
    <div className="book-interview-page">
      <div className="container">
        <h2 className="page-title">Book Interview</h2>
        <h3 className="greeting">Welcome, {userFullName}!</h3>
        <form onSubmit={handleSubmit} className="interview-form">
          <div className="form-group">
            <label className="form-label">Interview Type:</label>
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="form-select"
            >
              <option value="online">Online (2,000 KSH)</option>
              <option value="physical">Physical (1,000 KSH)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Choose Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Choose Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Book Interview
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookInterviewPage;
