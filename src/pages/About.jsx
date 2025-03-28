import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedin, 
  faYoutube, 
  faGoogle, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import "../css/styles.css";

function About() {
  const teamMembers = [
    { 
      name: 'Mukakalisa Ketia', 
      image: '/images/CEO.JPG', 
      role: 'Team Leader', 
      description: 'Oversees the team and ensures all projects are on track.' 
    },
    { 
      name: 'Jane Smith', 
      image: '/images/team2.jpg', 
      role: 'Developer', 
      description: 'Writes and maintains the code for our web and mobile applications.' 
    },
    { 
      name: 'John Johnson', 
      image: '/images/team.jpg', 
      role: 'Designer', 
      description: 'Designs beautiful and user-friendly interfaces for our products.' 
    },
    { 
      name: 'Bob Lee', 
      image: '/images/team3.jpg', 
      role: 'Marketing', 
      description: 'Manages our marketing strategies and client relations.' 
    },
  ];

  return (
    <>
      <div className="about-page">
        <Header />
        
        <main>
          <section className="about-header">
            <h1>About Us</h1>
            <p className="subtitle">Learn more about our company and mission</p>
          </section>

          <section className="about-content">
            <div className="mission-section">
              <h2>Our Mission</h2>
              <p>
                We are dedicated to providing exceptional services and products that
                make a difference in people's lives. Our team works tirelessly to
                innovate and deliver solutions that meet our customers' needs.
              </p>
            </div>

            <div className="history-section">
              <h2>Our History</h2>
              <p>
                Hope for Children was founded in 2010 with a mission to provide education and 
                support to underprivileged children. What started as a small initiative has 
                now grown into an international movement, impacting thousands of lives.
              </p>
            </div>

            <div className="vision-section">
              <h2>Our Vision</h2>
              <p>
                Our vision is a world where every child has access to quality education, 
                regardless of their background or financial situation.
              </p>
            </div>

            <div className="goals-section">
              <h2>Our Goals</h2>
              <ul>
                <li>Provide educational scholarships to at least 5,000 children annually</li>
                <li>Expand our mentorship program to reach more communities</li>
                <li>Ensure mental health support is available to every child in need</li>
                <li>Build partnerships to create sustainable educational resources</li>
              </ul>
            </div>

            <div className="team-section">
              <h2>Our Team</h2>
              <p>
                We're a diverse group of professionals who share a common passion for
                excellence. Each team member brings unique skills and perspectives
                that contribute to our success.
              </p>

              <div className="team-cards">
                {teamMembers.map((member, index) => (
                  <div key={index} className="card">
                    <img src={member.image} alt={member.name} className="team-member-image" />
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                    <p>{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="values-section">
              <h2>Our Values</h2>
              <ul>
                <li>Integrity in all our actions</li>
                <li>Customer-focused innovation</li>
                <li>Commitment to quality</li>
                <li>Collaboration and teamwork</li>
                <li>Sustainable growth</li>
              </ul>
            </div>

            <div className="testimonials-section">
              <h2>Success Stories</h2>
              <div className="testimonial">
                <p>"Hope for Children changed my life! Thanks to their scholarship, I was able to finish school and pursue my dream of becoming a teacher."</p>
                <h4>- Jane Doe, Scholarship Recipient</h4>
              </div>
              <div className="testimonial">
                <p>"The mentorship program helped me gain confidence and find my passion. I am now working as a software developer, giving back to my community."</p>
                <h4>- John Smith, Former Student</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/donate">Donate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="social-links">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faGoogle} /> Google</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
      </ul>
    </div>
  </div>
  <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to stay updated.</p>
            <form id="newsletterForm">
              <input type="email" name="email" placeholder="Your Email" required />
            </form>
            <button onClick={() => setNewsletterModalOpen(true)}>Subscribe</button>
          </div>
</footer>  {/* ✅ Fixed Closing Tag */}

      
    </>
  );
}

export default About;