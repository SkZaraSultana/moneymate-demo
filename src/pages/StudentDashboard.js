import React, { useState } from "react";

function StudentDashboard() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState({ Food: 0, Transport: 0, Entertainment: 0 });
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const totalExpenses = Object.values(expenses).reduce((a, b) => a + Number(b), 0);
    const suggestedSavings = Math.max(0, income - totalExpenses);
    const highestExpenseCategory = Object.keys(expenses).reduce((a, b) =>
      expenses[a] > expenses[b] ? a : b
    );

    // Personalized suggestions
    let suggestion = "";
    if (highestExpenseCategory && expenses[highestExpenseCategory] > income * 0.3) {
      suggestion = `You are spending a lot on ${highestExpenseCategory}. Try reducing it to save more!`;
    } else {
      suggestion = "Great! Your spending is balanced.";
    }

    setResults({ totalExpenses, suggestedSavings, highestExpenseCategory, suggestion });
  };

  const progressPercent = results
    ? Math.min(100, (results.suggestedSavings / income) * 100)
    : 0;

  return (
    <div>
      <h1>Student Savings & Expenses</h1>
      <p>Track your income, expenses, and learn how to save effectively.</p>

      <div style={{ backgroundColor: "#e0f7fa", padding: "20px", margin: "20px 0", borderRadius: "8px" }}>
        <h3>Monthly Income</h3>
        <input
          type="number"
          placeholder="Enter your income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", width: "200px" }}
        />
      </div>

      <div style={{ backgroundColor: "#fff3e0", padding: "20px", margin: "20px 0", borderRadius: "8px" }}>
        <h3>Monthly Expenses</h3>
        {Object.keys(expenses).map((cat) => (
          <div key={cat} style={{ margin: "10px 0" }}>
            <label>{cat}: </label>
            <input
              type="number"
              value={expenses[cat]}
              onChange={(e) => setExpenses({ ...expenses, [cat]: e.target.value })}
              style={{ padding: "5px", width: "100px" }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleCalculate}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "12px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Calculate Suggested Savings
      </button>

      {results && (
        <div style={{ padding: "20px", borderRadius: "8px", backgroundColor: "#e8f5e9" }}>
          <h3>Results</h3>
          <p>Total Expenses: ₹{results.totalExpenses}</p>
          <p>Suggested Savings: ₹{results.suggestedSavings}</p>
          <p>Category Spending Most: <strong>{results.highestExpenseCategory}</strong></p>
          <p style={{ fontStyle: "italic", color: "#d32f2f" }}>{results.suggestion}</p>

          <div style={{ marginTop: "15px" }}>
            <p>Savings Progress: {Math.round(progressPercent)}% of your income</p>
            <div
              style={{
                backgroundColor: "#c8e6c9",
                width: "100%",
                height: "25px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: "25px",
                  backgroundColor: "#4CAF50",
                  borderRadius: "8px",
                  textAlign: "right",
                  paddingRight: "5px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {Math.round(progressPercent)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
