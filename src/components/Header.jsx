import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/styles.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="hamburger">&#9776;</div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/donate">Donate</a>
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
