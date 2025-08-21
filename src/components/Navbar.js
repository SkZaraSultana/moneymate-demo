import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/student" style={{ margin: "10px" }}>Student</Link>
      <Link to="/shopkeeper" style={{ margin: "10px" }}>Shopkeeper</Link>
      <Link to="/analysis" style={{ margin: "10px" }}>Analysis</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
    </nav>
  );
}

export default Navbar;
