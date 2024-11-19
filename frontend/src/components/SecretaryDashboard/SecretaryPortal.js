import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecretaryPortal = () => {
    const [grades, setGrades] = useState([]);
    const [formData, setFormData] = useState({ name: '', grade: '', parent_email: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        async function fetchGrades() {
            const response = await axios.get('/api/grades');
            setGrades(response.data);
        }
        fetchGrades();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/add-student', formData);
            setMessage(response.data.message);
            setFormData({ name: '', grade: '', parent_email: '' });
        } catch (error) {
            setMessage('An error occurred while adding the student.');
        }
    };

    return (
        <div className="secretary-portal">
            <h2>Add Existing Student</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Student Name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Grade:
                    <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        required
                    >
                        <option value="">Select Grade</option>
                        {grades.map(grade => (
                            <option key={grade.id} value={grade.id}>{grade.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Parent Email:
                    <input
                        type="email"
                        value={formData.parent_email}
                        onChange={(e) => setFormData({ ...formData, parent_email: e.target.value })}
                        required
                    />
                </label>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default SecretaryPortal;
