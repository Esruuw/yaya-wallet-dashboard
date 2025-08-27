import React from "react";
import "./TransactionTable.css";

function TransactionTable({ transactions }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Category</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 ? (
          transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.amount} ETB</td>
              <td className={`type ${t.type.toLowerCase()}`}>{t.type}</td>
              <td>{t.category}</td>
              <td>{t.date}</td>
              <td className={`status ${t.status.toLowerCase()}`}>{t.status}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No transactions found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TransactionTable;