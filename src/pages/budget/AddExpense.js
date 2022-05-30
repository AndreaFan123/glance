import React, { useState } from "react";
import Select from "react-select";
import { EXPENSECATEGORY } from "../../components/constants";
import { FormWrapper } from "./styles/Addexpense.styled";

export default function AddExpense() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <>
      <FormWrapper>
        <label>
          <span>Expense Name</span>
          <input type="text" />
        </label>

        <label>
          <span>Amount ($)</span>
          <input type="text" />
        </label>

        <label>
          <span>Expense Category</span>
          <Select
            menuPlacement="auto"
            // onChange={(options) => setAssignee(options)}
            // onChange={handleExpense}
            options={EXPENSECATEGORY}
            value={expenseName}
            isMulti
          />
        </label>
        <div>
          <button>Submit</button>
        </div>
      </FormWrapper>
    </>
  );
}
