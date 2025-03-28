import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function ResetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    const email = e.target.email.value;
    console.log('Password reset requested for:', email);
    // Add your password reset API call or logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-content active">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
          />
          <button type="submit">Send Reset Link</button>
          <p>Remember your password? <Link to="/login">Login instead</Link></p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
