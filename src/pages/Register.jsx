import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone_number: formData.get("phone_number"),
    };

    try {
      const response = await axios.post(
        "https://hope-backend-9gc3.onrender.com/api/account/register/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration Successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content active">
        <h2>Create Account</h2>
        {error && <p className="error-message">{error}</p>}

        <form id="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone_number" placeholder="Phone Number" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength="8"
          />
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
