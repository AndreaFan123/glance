import React, { useState } from "react";
import { COLORS } from "../../components/constants";
import EditBudget from "./EditBudget";
import SaveBudget from "./SaveBudget";

//style
import { BudgetCard, BudgetInfoCard } from "./styles/BudgetInfo.styled";

export default function BudgetInfo({ expenses }) {
  const [budget, setBudget] = useState("30000");
  const [isEditing, setIsEditing] = useState(false);

  // NOTE: budget - all expense amount
  const totalExpenses = expenses.reduce(
    (preValue, currentValue) => Number(preValue) + Number(currentValue.amount),
    0
  );

  // NOTE: sum of each category

  // NOTE: warning if doesn't remain much budget
  const remainBudgetAlert =
    totalExpenses > budget
      ? { backgroundColor: `${COLORS.statusDelay}` }
      : { backgroundColor: `${COLORS.statusCompleted}`, color: "#fff" };

  // handle edit
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (number) => {
    setBudget(number);
    setIsEditing(false);
  };

  return (
    <BudgetInfoCard>
      <BudgetCard>
        {/* <p>
          Totla Budget : <span>$ {budget}</span>
        </p> */}
        {isEditing ? (
          <EditBudget handleSave={handleSave} budget={budget} />
        ) : (
          <SaveBudget handleEdit={handleEdit} budget={budget} />
        )}
      </BudgetCard>

      <BudgetCard>
        <p>
          Spent : <span>$ {totalExpenses}</span>
        </p>
      </BudgetCard>
      <BudgetCard style={remainBudgetAlert}>
        <p>
          Remain : <span>$ {budget - totalExpenses}</span>
        </p>
      </BudgetCard>
    </BudgetInfoCard>
  );
}
