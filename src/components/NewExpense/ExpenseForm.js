import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [titleEntry, setTitleEntry] = useState("");
  const [amountEntry, setAmountEntry] = useState("");
  const [dateEntry, setDateEntry] = useState("");

  function handleChange(identifier, value) {
    if (identifier === "title") {
      setTitleEntry(value);
    } else if (identifier === "date") {
      setDateEntry(value);
    } else {
      setAmountEntry(value);
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: titleEntry,
      amount: amountEntry,
      date: new Date(dateEntry),
    };

    props.onSaveExpenseData(expenseData);
    setTitleEntry("");
    setAmountEntry("");
    setDateEntry("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntry}
            onChange={(event) => {
              handleChange("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntry}
            onChange={(event) => {
              handleChange("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateEntry}
            onChange={(event) => {
              handleChange("date", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
