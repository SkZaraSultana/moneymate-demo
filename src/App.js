// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import ShopkeeperDashboard from "./pages/ShopkeeperDashboard";
import Analysis from "./pages/Analysis";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/shopkeeper" element={<ShopkeeperDashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
