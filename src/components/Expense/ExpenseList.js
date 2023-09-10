import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Expenses</h2>;
  }
  return (
    <li className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </li>
  );
}

export default ExpenseList;
