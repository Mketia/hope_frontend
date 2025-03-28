import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use navigate for redirection
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/account/token/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Login successful:', response.data);
      localStorage.setItem('authToken', response.data.token);

      navigate('/home');
      
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div id="login" className="auth-content active">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {}
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            name="username"  
            placeholder="Email"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <div className="forgot-password">
            <Link to="/reset">Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
