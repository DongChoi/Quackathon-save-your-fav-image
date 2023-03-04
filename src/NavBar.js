import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/userImages">Login </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
