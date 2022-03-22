import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <a className="navbar-brand" href="#">
            Contact
          </a>
          <a className="navbar-brand" href="#">
            Support
          </a>
        </nav>
      </div>
    </div>
  );
};
