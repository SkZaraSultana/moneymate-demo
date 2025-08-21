// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to MoneyMate</h1>
      <p style={{ fontSize: "18px" }}>Helping Students Save, Helping Shopkeepers Grow</p>
      
      <Link to="/student">
        <button style={{ margin: "15px", padding: "15px 25px", fontSize: "18px" }}>🎓 Student Dashboard</button>
      </Link>
      <Link to="/shopkeeper">
        <button style={{ margin: "15px", padding: "15px 25px", fontSize: "18px" }}>🏪 Shopkeeper Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
