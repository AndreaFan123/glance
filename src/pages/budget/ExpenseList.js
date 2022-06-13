import React from "react";
import { useFirestore } from "../../hook/useFirestore";
//icon
import { TiDelete } from "react-icons/ti";
import {
  ExpenseFlexHor,
  ExpenseFlexVer,
  ExpenseListItem,
  ExpenseListWrapper,
  DeleteIcon,
} from "./styles/ExpenseList.styled";

export default function ExpenseList({ expenses }) {
  const { deletedocment } = useFirestore("expenses");

  return (
    <>
      <ExpenseListWrapper>
        {expenses.map((expense) => (
          <ExpenseListItem key={expense.id}>
            <ExpenseFlexVer>
              <p>{expense.expenseName}</p>
              <div>
                <span>{expense.category}</span>
                <span>{expense.createdAt.toDate().toDateString()}</span>
              </div>
            </ExpenseFlexVer>
            <ExpenseFlexHor>
              <p>${expense.amount}</p>
              <TiDelete
                style={DeleteIcon}
                onClick={() => deletedocment(expense.id)}
              />
            </ExpenseFlexHor>
          </ExpenseListItem>
        ))}
      </ExpenseListWrapper>
    </>
  );
}
