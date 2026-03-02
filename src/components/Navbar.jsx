import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container";

const linkClass = ({ isActive }) => `navLink ${isActive ? "card" : ""}`.trim();

export default function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="navInner">
          <Link to="/" className="brand" aria-label="Remico Industries Home">
            <div className="brandName">Remico Industries</div>
            <div className="brandTag">Industrial Machinery & Solutions</div>
          </Link>

          <nav className="navLinks" aria-label="Primary navigation">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <Link className="btn btnPrimary navCta" to="/contact">
              Make an Inquiry
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
