export async function fetchTransactions() {
  try {
    const res = await fetch("http://localhost:5000/api/transactions");
    return await res.json();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}