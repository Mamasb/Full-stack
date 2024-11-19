import React, { useState } from 'react';

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    familyName: '',
    grade: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/students/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Student added and SMS sent to parent.');
    } else {
      alert('Failed to add student.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="middleName" placeholder="Middle Name" onChange={handleChange} />
      <input type="text" name="familyName" placeholder="Family Name" onChange={handleChange} required />
      <input type="text" name="grade" placeholder="Grade" onChange={handleChange} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
