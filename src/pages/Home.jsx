import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faHandHoldingUsd,
  faUtensils,
  faBook,
  faHeart,
  faEye,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const navigate = useNavigate();
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [donationData, setDonationData] = useState({
    name: "",
    email: "",
    phone_number: "",
    amount: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const authToken = localStorage.getItem("authToken");

      if (!refreshToken || !authToken) {
        console.error("No tokens found");
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
        return;
      }

      await axios.post(
        "https://hope-backend-9gc3.onrender.com/api/account/logout/",
        { refresh: refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.response?.data || error.message);
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  };

  const handleDonationChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      await axios.post(
        "https://hope-backend-9gc3.onrender.com/api/donations/",
        donationData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      alert("Donation submitted successfully!");
      setDonationModalOpen(false);
    } catch (error) {
      console.error("Donation Error:", error.response?.data || error.message);
      alert("Failed to submit donation");
    }
  };

  const solutions = [
    {
      image: "/images/scholarship.jpg",
      title: "Scholarships",
      description: "Providing full scholarships to children in need.",
    },
    {
      image: "/images/therapy.jpg",
      title: "Mental Health Support",
      description: "Connecting students with therapists and emotional support.",
    },
    {
      image: "/images/language.jpg",
      title: "Language Support",
      description:
        "Offering translation headsets to overcome language barriers.",
    },
  ];

  const problem = [
    {
      image: "/images/scholarship.jpg",
      title: "School Issues",
      description: "Addressing school issues and improving student outcomes.",
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="hamburger">&#9776;</div>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
          <div className="user-info">
            <span id="username-display">
              {localStorage.getItem("user") || "Guest"}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>Bringing Hope and Restoring Dreams</h1>
        <p>We help children return to school and build a better future.</p>
        <div className="buttons">
          <button
            onClick={() => setDonationModalOpen(true)}
            className="donate-btn"
          >
            Donate Now
          </button>
          <button
            onClick={() => setShowBlog(!showBlog)}
            className="donate-now-btn"
          >
            {showBlog ? "Hide Blog" : "View Blog"}
          </button>
          <button
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="contribute-btn"
          >
            Contact Us
          </button>
        </div>

        {donationModalOpen && (
          <div id="donationModal" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => setDonationModalOpen(false)}
              >
                &times;
              </span>
              <h2>Donate & Change a Life</h2>
              <form onSubmit={handleDonationSubmit} id="donationForm">
                <input
                  type="text"
                  name="name"
                  value={donationData.name}
                  onChange={handleDonationChange}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={donationData.email}
                  onChange={handleDonationChange}
                  placeholder="Your Email"
                  required
                />
                <input
                  type="tel"
                  name="phone_number"
                  value={donationData.phone_number}
                  onChange={handleDonationChange}
                  placeholder="Your Phone Number"
                  required
                />
                <input
                  type="number"
                  name="amount"
                  value={donationData.amount}
                  onChange={handleDonationChange}
                  placeholder="Amount ($)"
                  min="1"
                  required
                />
                <button type="submit">Donate Now</button>
              </form>
            </div>
          </div>
        )}

        {showBlog && (
          <section id="blog" className="blog">
            <h1>Our Blog</h1>
            <article className="blog-post">
              <img src="/images/education.jpg" alt="Blog Image" />
              <h2>How Education Transforms Lives</h2>
              <p>Education is the key to breaking the cycle of poverty.</p>
              <a href="#">Read More</a>
            </article>
            <article className="blog-post">
              <img src="/images/therapist.jpg" alt="Blog Image" />
              <h2>Supporting Mental Health in Children</h2>
              <p>Learn how we provide therapy and emotional support.</p>
              <button className="read-more-btn">Read More</button>
            </article>
          </section>
        )}
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Hope for Children is a nonprofit organization dedicated to helping
              out-of-school children return to education. Since 2010, we have
              impacted over 10,000 children across 20 countries.
            </p>
          </div>

          <div className="about-cards">
            <div className="card">
              <div className="cards">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Our Mission</h3>
              <p>
                Ensuring every child has access to quality education, regardless
                of their circumstances.
              </p>
            </div>
            <div className="card">
              <div className="cards">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h3>Our Vision</h3>
              <p>
                A world where no child is left behind due to financial or social
                challenges.
              </p>
            </div>
            <div className="card">
              <div className="cards">
                <FontAwesomeIcon icon={faHistory} />
              </div>
              <h3>Our Story</h3>
              <p>
                Founded in 2010, we have been working tirelessly to make
                education accessible to every child in need.
              </p>
            </div>
            <div className="card">
              <div className="cards">
                <FontAwesomeIcon icon={faHistory} />
              </div>
              <h3>Our value</h3>
              <p>
                Provide educational scholarships to at least 5,000 children
                annually,Build partnerships to create sustainable educational
                resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2>What We Provide</h2>
        <div className="service-list">
          <div className="service-card">
            <div className="cards">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h3>Therapy</h3>
            <p>
              We provide therapy to help children with mental health issues.
            </p>
          </div>
          <div className="service-card">
            <div className="cards">
              <FontAwesomeIcon icon={faHandHoldingUsd} />
            </div>
            <h3>Support</h3>
            <p>We provide emotional and financial support...</p>
          </div>
          <div className="service-card">
            <div className="cards">
              <FontAwesomeIcon icon={faUtensils} />
            </div>

            <h3>Meals</h3>
            <p>Nutritious meals to ensure children stay healthy and focused.</p>
          </div>
          <div className="service-card">
            <div className="cards">
              <FontAwesomeIcon icon={faBook} />
            </div>

            <h3>Education</h3>
            <p>Access to quality education and learning resources.</p>
          </div>
          <div className="service-card">
            <div className="cards">
              <FontAwesomeIcon icon={faHeart} />
            </div>

            <h3>Care</h3>
            <p>We care for the overall well-being of every child.</p>
          </div>
        </div>
      </section>

      <section id="problem" className="problem">
        <div className="problem-content">
          <h2>The Problem We Solve</h2>
          <p>
            In Gisenyi, many children drop out of school due to financial
            struggles, mental health issues, and language barriers. This leads
            to an increase in street children, crime, and lost opportunities for
            a brighter future. Our goal is to change that.
          </p>
          <img
            src="/images/street.png"
            alt="Children in need"
            className="problem-img"
          />
        </div>
      </section>

      <section id="solutions" className="solutions">
        <h2>How We Help</h2>
        <div className="solution-cards">
          {solutions.map((solution, index) => (
            <div key={index} className="card">
              <img src={solution.image} alt={solution.title} />
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contacts" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: info@hopeforchildren.org</p>
            <p>Phone: +250 789 123 456</p>
            <p>Address: 123 Hope Street, Gisenyi, Rwanda</p>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} /> YouTube
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGoogle} /> Google
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to stay updated.</p>
            <form id="newsletterForm">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </form>
            <button onClick={() => setNewsletterModalOpen(true)}>
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
