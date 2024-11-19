import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    first_name: '',
    last_name: '',
    grade: '',
  });
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/students', studentData);

      if (response.data.status === 'success') {
        setAdmissionNumber(response.data.admission_number);
        setPassword(response.data.password);
        setMessage('Student added successfully!');
      }
    } catch (err) {
      setError('Error adding student: ' + err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={studentData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={studentData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>

      {message && <div>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {admissionNumber && password && (
        <div>
          <h3>Student Login Details:</h3>
          <p>Admission Number: {admissionNumber}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
