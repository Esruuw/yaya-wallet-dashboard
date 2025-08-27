import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TransactionTable from "../components/TransactionTable";
import StatsSummary from "../components/StatsSummary";
import { fetchTransactions } from "../services/api";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTransactions().then((data) => setTransactions(data));
  }, []);

  const filtered = transactions.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <StatsSummary transactions={transactions} />
      <SearchBar search={search} setSearch={setSearch} />
      <TransactionTable transactions={filtered} />
    </div>
  );
}

export default Dashboard;