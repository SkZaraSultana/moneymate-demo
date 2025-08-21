import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Analysis() {
  // Dummy student data
  const studentIncome = 9000;
  const studentBreakdown = [
    { name: "Food", value: 5000 },
    { name: "Transport", value: 1500 },
    { name: "Entertainment", value: 2500 },
  ];

  // Dummy shopkeeper data
  const shopIncome = 10000;
  const desiredLoan = 8000;
  const shopData = [
    { name: "Approved", value: 1 },
    { name: "Rejected", value: 0 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Community Insights (Demo)</h1>

      {/* Student Example */}
      <h3>Student Example: Monthly Expenses</h3>
      <p><strong>Income:</strong> ₹{studentIncome}</p>
      {studentBreakdown.map((item) => (
        <p key={item.name}><strong>{item.name}:</strong> ₹{item.value}</p>
      ))}

      <PieChart width={400} height={300}>
        <Pie
          data={studentBreakdown}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, value }) => `${name}: ₹${value}`}
        >
          {studentBreakdown.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `₹${value}`} />
        <Legend />
      </PieChart>

      {/* Shopkeeper Example */}
      <h3>Shopkeeper Example: Loan Status</h3>
      <p><strong>Income:</strong> ₹{shopIncome}</p>
      <p><strong>Desired Loan:</strong> ₹{desiredLoan}</p>

      <PieChart width={400} height={300}>
        <Pie
          data={shopData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name }) => name}
        >
          {shopData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Analysis;
