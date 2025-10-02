// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Blisgo Clone. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
