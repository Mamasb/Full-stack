import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      parent_phone: parentPhone,
    };

    try {
      const response = await axios.post('http://localhost:5000/add_student', studentData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage(`Student added! Admission Number: ${response.data.admission_number}, Password: ${response.data.login_password}`);
    } catch (error) {
      console.error('There was an error adding the student:', error);
      setMessage('Error adding student');
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Parent's Phone Number:</label>
          <input
            type="text"
            value={parentPhone}
            onChange={(e) => setParentPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register Student</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default RegistrationForm;
