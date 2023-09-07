import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 9th 2003</div>
      <div className="expense-item__description">
        <h2>Nashta</h2>
        <div className="expense-item__price">PKR 100</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
