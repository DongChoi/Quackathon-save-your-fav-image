import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar({ userImages }) {
  let numberOfImages = Object.keys(userImages).length;
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/userImage">Saved Images ({numberOfImages})</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
