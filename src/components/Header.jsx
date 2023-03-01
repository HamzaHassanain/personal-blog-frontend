import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar container">
      <ul className="navbar-list">
        <li className="nav-item">
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to={"/about"}>
            About
          </Link> */}
        </li>
      </ul>
    </nav>
  );
}
