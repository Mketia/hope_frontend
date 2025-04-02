import React from "react";
import { Link } from "react-router-dom"; // MUST be imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/styles.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="hamburger">&#9776;</div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <div className="user-info">
          <span id="username-display"></span>
          <button onClick={() => console.log("Logout")}>Logout</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
