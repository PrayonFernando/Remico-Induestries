import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footerGrid">
          <div>
            <div className="footerTitle">Remico Industries</div>
            <div className="footerSmall">
              Reliable industrial machinery supply and support for businesses in
              Sri Lanka.
              <br />
              Address: 45, Edirisingha Road, Mirihana, Colombo 05
            </div>
          </div>

          <div>
            <div className="footerTitle">Contact</div>
            <div className="footerSmall">
              <div>Phone 1: 0117511040</div>
              <div>Phone 2: 0117904112</div>
              <div>Email: info@remicoindustries.com</div>
            </div>
          </div>

          <div>
            <div className="footerTitle">Quick Links</div>
            <Link className="footerLink" to="/products">
              Products
            </Link>
            <Link className="footerLink" to="/about">
              About
            </Link>
            <Link className="footerLink" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <hr className="hr" />

        <div className="footerSmall">
          © {year} Remico Industries. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
