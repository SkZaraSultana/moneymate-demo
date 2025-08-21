import React, { useState } from "react";

function ShopkeeperDashboard() {
  const [income, setIncome] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [result, setResult] = useState(null);

  const handleEvaluateLoan = () => {
    const incomeNum = Number(income);
    const loanNum = Number(loanAmount);

    let evaluation = {};

    if (loanNum <= 0 || incomeNum <= 0) {
      evaluation = {
        status: "Error",
        message: "Please enter valid income and loan amount.",
      };
    } else if (loanNum > incomeNum * 1.5) {
      evaluation = {
        status: "Rejected",
        reason: "Requested loan is too high compared to your income.",
        suggestion:
          "Provide alternative financial proofs (sales invoices, utility bills, tax returns, customer orders) or reduce loan amount.",
      };
    } else if (loanNum > incomeNum) {
      evaluation = {
        status: "Rejected",
        reason: "Income seems insufficient for the requested loan.",
        suggestion:
          "Show consistent earnings using alternative proofs: digital payment history, rent receipts, GST returns, or have a co-signer.",
      };
    } else {
      evaluation = {
        status: "Approved",
        reason: "Your income is sufficient for this loan amount.",
        suggestion:
          "Keep maintaining consistent financial records for future loan requests.",
      };
    }

    setResult(evaluation);
  };

  return (
    <div>
      <h1>Shopkeeper Loan Evaluation</h1>
      <p>Enter your income and desired loan amount to see if the loan is likely to be approved.</p>

      {/* Income Input */}
      <div style={{ backgroundColor: "#fff3e0", padding: "20px", margin: "20px 0", borderRadius: "8px" }}>
        <h3>Monthly Income</h3>
        <input
          type="number"
          placeholder="Enter your monthly income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", width: "200px" }}
        />
      </div>

      {/* Loan Input */}
      <div style={{ backgroundColor: "#e0f7fa", padding: "20px", margin: "20px 0", borderRadius: "8px" }}>
        <h3>Desired Loan Amount</h3>
        <input
          type="number"
          placeholder="Enter loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", width: "200px" }}
        />
      </div>

      <button
        onClick={handleEvaluateLoan}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "12px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Evaluate Loan
      </button>

      {/* Result Box */}
      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: result.status === "Approved" ? "#e8f5e9" : "#ffebee",
          }}
        >
          <h3>Loan Status: {result.status}</h3>
          {result.reason && <p><strong>Reason:</strong> {result.reason}</p>}
          {result.suggestion && <p><strong>Suggestion:</strong> {result.suggestion}</p>}
        </div>
      )}
    </div>
  );
}

export default ShopkeeperDashboard;
