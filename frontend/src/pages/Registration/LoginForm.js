// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.status === "success") {
            switch (data.user_type) {
                case 'student':
                    navigate('/student-dashboard');
                    break;
                case 'parent':
                    navigate('/parent-dashboard');
                    break;
                case 'director':
                    navigate('/director-dashboard');
                    break;
                default:
                    navigate('/dashboard');
            }
        } else {
            alert("Login failed: " + data.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <h2>Adams Login</h2>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
