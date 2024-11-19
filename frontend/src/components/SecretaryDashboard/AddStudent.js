// src/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [parentPhone, setParentPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const studentData = {
            first_name: firstName,
            last_name: lastName,
            dob: dob,
            parent_phone: parentPhone,
        };

        axios.post('http://localhost:5000/add_student', studentData)
            .then(response => {
                alert('Student added successfully!');
            })
            .catch(error => {
                console.error('There was an error adding the student!', error);
            });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label><br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </label><br />
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </label><br />
                <label>
                    Parent's Phone:
                    <input
                        type="text"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        required
                    />
                </label><br />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;
