import Expense from "./components/Expense/Expense";
import "./App.css";

import NewExpense from "./components/New Expense Form/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Nashta",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Snack", amount: 150, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Lunch",
      amount: 200,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Dinner",
      amount: 300,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
