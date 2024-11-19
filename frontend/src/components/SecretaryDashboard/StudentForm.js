import React, { useState } from 'react';

function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');
  const [message, setMessage] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { first_name: firstName, last_name: lastName, grade };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setMessage('Student added successfully!');
        setAdmissionNumber(data.admission_number);
        setPassword(data.password);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to add student');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      {message && <p>{message}</p>}
      {admissionNumber && (
        <div>
          <p>Admission Number: {admissionNumber}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;
