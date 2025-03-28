import React, { useState } from 'react';
import Header from "../components/Header"; // Import your home page's Header
import Footer from "../components/Footer"; // Import your home page's Footer
import "../css/styles.css";

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    donation_type: 'one-time',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', formData);
    alert('Thank you for your donation!');
  };

  return (
    <div className="donation-form-page">
      <Header /> {/* Home page Header */}

      <section className="donation-form-container">
        <h2>Donate & Change a Life</h2>
        <form onSubmit={handleSubmit} className="donation-form">
          <input 
            type="text" 
            name="name" 
            className="donation-input"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            className="donation-input"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            className="donation-input"
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleInputChange}
            required 
          />
          <select 
            name="donation_type" 
            className="donation-select"
            value={formData.donation_type}
            onChange={handleInputChange}
          >
            <option value="one-time">One-Time Donation</option>
            <option value="monthly">Monthly Donation</option>
          </select>
          <input 
            type="number" 
            name="amount" 
            className="donation-input"
            placeholder="Amount ($)" 
            value={formData.amount}
            onChange={handleInputChange}
            required 
          />
          <button type="submit" className="donation-submit-btn">Donate Now</button>
        </form>
      </section>

      <Footer /> {/* Home page Footer */}
    </div>
  );
}

export default DonationForm;
