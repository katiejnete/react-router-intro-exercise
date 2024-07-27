import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        <button><Link to="/cake">miffy cake</Link></button>
        <button><Link to="/ice-cream">miffy ice cream</Link></button>
        <button><Link to="/dango">miffy dango</Link></button>
    </nav>
  );
};

export default NavBar;
