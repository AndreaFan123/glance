import React from "react";
import {
  TotalBudgetCard,
  RemainBudgetCard,
  SpentCard,
  BudgetInfoCard,
} from "./styles/BudgetInfo.styled";

export default function BudgetInfo() {
  return (
    <BudgetInfoCard>
      <TotalBudgetCard>
        <p>
          Totla Budget: <span>$ 200000</span>
        </p>
      </TotalBudgetCard>

      <RemainBudgetCard>
        <p>
          Remain: <span>$ 8000</span>
        </p>
      </RemainBudgetCard>

      <SpentCard>
        <p>
          Spent: <span>$ 2000</span>
        </p>
      </SpentCard>
    </BudgetInfoCard>
  );
}
