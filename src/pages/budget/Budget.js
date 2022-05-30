import React from "react";
import { useAuthContext } from "../../hook/useContext";
import {
  AddExpenseCard,
  BudgetWrapper,
  ExpenseGrid,
} from "./styles/Budget.styled";

import BudgetInfo from "./BudgetInfo";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

export default function Budget() {
  const { user } = useAuthContext;
  return (
    <BudgetWrapper>
      <h2>Budget Planner</h2>
      <div>
        <BudgetInfo />
      </div>
      <ExpenseGrid>
        <AddExpenseCard>
          <h3>Add Expense</h3>
          <AddExpense />
        </AddExpenseCard>
        <div>
          <h3>Expenses</h3>
          <ExpenseList />
        </div>
      </ExpenseGrid>
    </BudgetWrapper>
  );
}
