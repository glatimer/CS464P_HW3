import React from "react";
import Navbar from "../components/navbar";

import "../index.css";

export default function Root() {
  return (
    <section id="navbar">
      <Navbar />

      {/* <nav>
        <ul id="nav-list">
          <li className="nav-item">
            <a href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a href="/list">Countries</a>
          </li>
          <li className="nav-item">
            <a href="/population">Populations</a>
          </li>
          <li className="nav-item">
            <a href="/languages">Languages</a>
          </li>
        </ul>
      </nav> */}
    </section>
  );
}
