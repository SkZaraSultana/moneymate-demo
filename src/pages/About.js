import React from "react";

function About() {
  return (
    <div style={{ 
      padding: "40px", 
      maxWidth: "800px", 
      margin: "0 auto", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#f9f9f9", 
      borderRadius: "10px", 
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)" 
    }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "40px", 
        color: "#1976d2" 
      }}>About MoneyMate</h1>

      <h2 style={{ color: "#1565c0", marginBottom: "15px" }}>Problem</h2>
      <ul style={{ lineHeight: "1.8", color: "#333" }}>
        <li>Students struggle to save money and manage expenses.</li>
        <li>Shopkeepers often face loan rejections due to missing financial proof or lack of records.</li>
      </ul>

      <h2 style={{ color: "#1565c0", marginTop: "30px", marginBottom: "15px" }}>Solution</h2>
      <ul style={{ lineHeight: "1.8", color: "#333" }}>
        <li>
          <strong>Students:</strong> Enter income & expenses → get suggested savings, overspending alerts, and simple tips to manage money better.
        </li>
        <li>
          <strong>Shopkeepers:</strong> Enter income & loan request → receive instant approval prediction, reason for rejection (if any), and advice to improve approval chances.
        </li>
        <li>
          <strong>Analysis:</strong> Visual dashboards display expense breakdowns and loan statuses, helping both students and shopkeepers understand financial behavior clearly.
        </li>
      </ul>

      <h2 style={{ color: "#1565c0", marginTop: "30px", marginBottom: "15px" }}>Why it Matters</h2>
      <ul style={{ lineHeight: "1.8", color: "#333" }}>
        <li>Encourages <strong>financial discipline for students</strong>.</li>
        <li>Helps <strong>shopkeepers access loans safely</strong>, reducing reliance on high-interest alternatives.</li>
        <li>Provides <strong>insights for better financial decisions</strong>.</li>
      </ul>
    </div>
  );
}

export default About;
