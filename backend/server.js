// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Enhanced transactions with more data
const transactions = [
  { 
    id: 1, 
    name: "Esrael", 
    amount: 250, 
    status: "Completed",
    date: "2025-10-15",
    type: "Deposit",
    category: "Salary"
  },
  { 
    id: 2, 
    name: "Kenean", 
    amount: 450, 
    status: "Pending",
    date: "2025-10-16",
    type: "Withdrawal",
    category: "Shopping"
  },
  { 
    id: 3, 
    name: "Kenna", 
    amount: 100, 
    status: "Failed",
    date: "2025-10-14",
    type: "Transfer",
    category: "Utilities"
  },
  { 
    id: 4, 
    name: "Amen", 
    amount: 320, 
    status: "Completed",
    date: "2025-10-13",
    type: "Deposit",
    category: "Refund"
  },
  { 
    id: 5, 
    name: "Heaven", 
    amount: 75, 
    status: "Completed",
    date: "2025-10-12",
    type: "Withdrawal",
    category: "Dining"
  },
];

// Routes
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));