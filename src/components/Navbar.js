import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">Portfolio</div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
