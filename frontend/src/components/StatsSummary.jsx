import React from "react";
import "./StatsSummary.css";

function StatsSummary({ transactions }) {
  const totalTransactions = transactions.length;
  const completedTransactions = transactions.filter(t => t.status === "Completed").length;
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  
  return (
    <div className="stats-summary">
      <div className="stat-card">
        <h3>Total Transactions</h3>
        <p className="stat-number">{totalTransactions}</p>
      </div>
      <div className="stat-card">
        <h3>Completed</h3>
        <p className="stat-number">{completedTransactions}</p>
      </div>
      <div className="stat-card">
        <h3>Total Amount</h3>
        <p className="stat-number">{totalAmount} ETB</p>
      </div>
    </div>
  );
}

export default StatsSummary;