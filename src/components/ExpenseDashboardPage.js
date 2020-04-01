import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    {props.name}
  </div>
);

export default ExpenseDashboardPage;
