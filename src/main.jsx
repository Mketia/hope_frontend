import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import About from "./pages/About";
import Donate from "./pages/Donate";
import ScholarshipSection from "./pages/ScholarshipSection";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Create this if you haven't
import "../src/css/styles.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="donate" element={<Donate />} />
          <Route path="reset" element={<Reset />} />
          <Route path="scholarship" element={<ScholarshipSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
