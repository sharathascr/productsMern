import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">myApp</Link>
      </div>
      <ul className="nav-list-items">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
