import React from "react"
import "./Navbar.scss"
import Logo from "../images/Logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt=''className="logo"/>
      <p className="compName">HannyaHankz</p>
      <ul className="nav-links">
        <li className="nav-items">About</li>
        <li className="nav-items">Gallery</li>
        <li className="nav-items">Contact</li>
      </ul>
    </div>
  );
};
export default Navbar;
