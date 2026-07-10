"use client";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <a href="#home" className="logo">
          JP.
        </a>

        <nav>

          <a href="#about">About</a>

          <a href="#platforms">Platforms</a>

          <a href="#experience">Experience</a>

          <a href="#case-studies">Case Studies</a>

          <a href="#performance">Performance</a>

          <a href="#contact">Contact</a>

        </nav>

        <a href="#contact" className="nav-button">
          Hire Me
        </a>

      </div>

    </header>
  );
}