import React, { useEffect, useState } from "react";
import { CategoryCard, CategoryWrapper } from "./styles/Category.styled";
import { MdAttachMoney } from "react-icons/md";
import { COLORS } from "../../components/constants";

export default function Category({ expenses }) {
  const [totalSpent, setTotalSpent] = useState();
  const [budgetBaseLine, setBudgetBaseLine] = useState("1500");

  useEffect(() => {
    let amount = expenses.reduce((preVal, currVal) => {
      let expense = preVal.find(
        (expense) => expense.category === currVal.category
      );

      if (expense) {
        expense.amount += currVal.amount;
      } else {
        preVal.push(currVal);
      }
      return preVal;
    }, []);
    setTotalSpent(amount);
  }, [expenses]);

  return (
    <CategoryWrapper>
      {totalSpent &&
        totalSpent.map((spent) => (
          <CategoryCard key={spent.category}>
            {spent.amount < budgetBaseLine && (
              <>
                <p>{spent.category} </p>
                <span>
                  <MdAttachMoney /> {spent.amount}
                </span>
              </>
            )}
            {spent.amount > budgetBaseLine && (
              <>
                <p style={{ color: `${COLORS.statusOngoing}` }}>
                  {spent.category}{" "}
                </p>
                <span style={{ color: `${COLORS.statusOngoing}` }}>
                  <MdAttachMoney /> {spent.amount}
                </span>
              </>
            )}
          </CategoryCard>
        ))}
    </CategoryWrapper>
  );
}
