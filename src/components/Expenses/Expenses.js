import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import "./ExpenseList.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  function handleData(input) {
    return (
      <ExpenseItem
        key={input.id}
        title={input.title}
        amount={input.amount}
        date={input.date}
      />
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? (
          <h2
            className="
expenses-list__fallback"
          >
            No expenses found
          </h2>
        ) : (
          <ul className="expense-list">{filteredExpenses.map(handleData)}</ul>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
