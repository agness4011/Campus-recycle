import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <a href="/" className="header-logo">
            Campus Recycle
          </a>
          <ul className="header-menu">
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
