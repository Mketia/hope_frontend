
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone_number: e.target.phone_number.value
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/account/register/', formData);
      console.log('Registration Successful:', response.data);
      

      navigate('/login');
      
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content active">
        <h2>Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form id="registerForm" onSubmit={handleSubmit}>

        <input type="text" name="first_name" placeholder="First Name" required />
        <input type="text" name="last_name" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone_number" placeholder="phone_number" />
          <input type="password" name="password" placeholder="password" required minLength="8"/>
          <button type="submit">Register</button>
          <p className="auth-footer">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
