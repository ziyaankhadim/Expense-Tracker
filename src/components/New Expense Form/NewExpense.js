import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
