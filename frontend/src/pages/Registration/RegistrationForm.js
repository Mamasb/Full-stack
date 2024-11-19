// RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    familyName: '',
    password: '',
    confirmPassword: '',
    userType: 'Baby Class', // Default user type
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.middleName ||
      !formData.familyName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Store full name and user type in local storage
    const fullName = `${formData.firstName} ${formData.middleName} ${formData.familyName}`;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userType', formData.userType);

    // Redirect based on userType
    if (formData.userType === 'Baby Class') {
      navigate('/baby-class-services'); // Redirect to customized services for Baby Class
    } else if (['PP1', 'PP2'].includes(formData.userType)) {
      navigate('/pp-services'); // Redirect to customized services for PP1 and PP2
    } else {
      navigate('/book-interview'); // Redirect to book interview for Grades 1-9
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Adams Registration Form</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="familyName"
          placeholder="Family Name"
          value={formData.familyName}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="Baby Class">Baby Class</option>
          <option value="PP1">PP1</option>
          <option value="PP2">PP2</option>
          <option value="Grade1">Grade 1</option>
          <option value="Grade2">Grade 2</option>
          <option value="Grade3">Grade 3</option>
          <option value="Grade4">Grade 4</option>
          <option value="Grade5">Grade 5</option>
          <option value="Grade6">Grade 6</option>
          <option value="Grade7">Grade 7</option>
          <option value="Grade8">Grade 8</option>
          <option value="Grade9">Grade 9</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
