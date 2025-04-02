import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Reset from "./pages/Reset.jsx";
import Register from "./pages/Register.jsx"; // Make sure this import is correct
import About from "./pages/About.jsx";
import Donate from "./pages/Donate.jsx";
import ScholarshipSection from "./pages/ScholarshipSection.jsx";
import Home from "./pages/Home.jsx";
import "../src/css/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faTwitter, faYoutube);

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/scholarship" element={<ScholarshipSection />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
