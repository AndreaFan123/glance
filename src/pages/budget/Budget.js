import React from "react";
import { useAuthContext } from "../../hook/useContext";
import { useCollection } from "../../hook/useCollection";

import {
  ExpenseSecton,
  BudgetWrapper,
  ExpenseGrid,
} from "./styles/Budget.styled";

import BudgetInfo from "./BudgetInfo";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

export default function Budget() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "expenses",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <BudgetWrapper>
      <h2>Budget Planner</h2>
      <div>{documents && <BudgetInfo expenses={documents} />}</div>
      <ExpenseGrid>
        <ExpenseSecton>
          <h3>Add Expense</h3>
          <AddExpense
            uid={user.uid}
            name={user.displayName}
            submitter={user.displayName}
          />
        </ExpenseSecton>
        <ExpenseSecton>
          <h3>Expenses</h3>
          {error && <p>{error}</p>}
          {/* NOTE: Output list if we have documents */}
          {documents && <ExpenseList expenses={documents} />}
        </ExpenseSecton>
      </ExpenseGrid>
    </BudgetWrapper>
  );
}
