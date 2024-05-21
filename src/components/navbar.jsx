import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/population">
                Population
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/languages">
                Languages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
