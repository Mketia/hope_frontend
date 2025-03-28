import React from "react";
import { 
  faInstagram, 
  faLinkedin, 
  faYoutube, 
  faTwitter, 
  faGoogle 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <>
      <div id="contacts" className="contact-section">
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
      </div>
      <footer>
        <div className="footer-content">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#donate">Donate</a></li>
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
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to stay updated.</p>
            <form id="newsletterForm">
              <input type="email" name="email" placeholder="Your Email" required />
            </form>
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;