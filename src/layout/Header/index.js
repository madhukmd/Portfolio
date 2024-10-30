import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaTimes,
  FaDownload,
  FaRegSun,
  FaRegMoon,
} from "react-icons/fa";

import "./index.css";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-container">
          <img
            className="icon"
            src="/avatar.png"
            alt="Developer Logo"
          />

          <h1 className="logo">Portfolio</h1>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <RxHamburgerMenu />}
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#home" className="link">
            <FaHome />
            <p className="p-link">Home</p>
          </a>
          <a href="#skills" className="link">
            <FaCode />
            <p className="p-link">Skills</p>
          </a>
          <a href="#about" className="link">
            <FaUser />
            <p className="p-link">About</p>
          </a>
          <a href="/madhu resume.pdf" className="link">
            <FaDownload/>
            <p className="p-link">Resume</p>
          </a>
          <a href="#contact" className="link">
            <FaEnvelope />
            <p className="p-link">Contact</p>
          </a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme==="dark" ? <FaRegSun /> : <FaRegMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
