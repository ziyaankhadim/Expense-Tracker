import { useState } from "react";
import Expense from "./components/Expense/Expense";
import "./App.css";

import NewExpense from "./components/New Expense Form/NewExpense";
function App() {
  const dummy_expenses = [
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
    {
      id: "e5",
      title: "Hair Cut",
      amount: 350,
      date: new Date(2023, 5, 10),
    },
    {
      id: "e6",
      title: "Badminton Racket",
      amount: 2000,
      date: new Date(2023, 6, 12),
    },
    {
      id: "e7",
      title: "Summer Course Repeat",
      amount: 6000,
      date: new Date(2023, 7, 14),
    },
  ];
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
