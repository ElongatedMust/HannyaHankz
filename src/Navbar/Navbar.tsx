import React from "react";
import "./Navbar.scss";
import Logo from "../images/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <p className="compName">HannyaHankz</p>
      <p className="madeIn">- made in Canada</p>
    </div>
  );
};
export default Navbar;
