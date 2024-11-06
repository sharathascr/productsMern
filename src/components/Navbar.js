import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { AppContext } from "../contextAPI/AppContextProvider";

function Navbar() {
  const { isLogin, setLogin } = useContext(AppContext);
  console.log(isLogin);
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
        {!isLogin ? (
          <>
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
          </>
        ) : (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setLogin(sessionStorage.clear())}
            >
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
