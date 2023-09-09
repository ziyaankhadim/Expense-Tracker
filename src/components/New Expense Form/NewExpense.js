import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
function NewExpense() {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
