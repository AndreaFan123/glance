import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFirestore } from "../../hook/useFirestore";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";
//component
import { EXPENSECATEGORY } from "../../components/constants";

// Style
import { FormWrapper } from "./styles/Addexpense.styled";

////////////////////////////////////////

export default function AddExpense({ uid, name, submitter }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [pjName, setpjName] = useState("");
  const [formError, setFormError] = useState(null);
  // TEST: listen projects state
  const [projectItems, setProjectItems] = useState([]);
  const { addDocument, response } = useFirestore("expenses");
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects", [
    "created",
    "==",
    user.displayName,
  ]);

  // Local storage
  const windowStorage = window.localStorage;
  const SELECT_CATEGORY_KEY = "selectCategory";

  // TEST: When website first render, need to get all project names
  useEffect(() => {
    if (documents) {
      const options = documents.map((item) => {
        return { value: item, label: item.projectName };
      });
      setProjectItems(options);
    }
  }, [documents]);

  // NOTE: Handle submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    windowStorage.clear();

    setFormError(null);

    if (!expenseName) {
      setFormError("Please enter one");
      return;
    }

    if (!amount) {
      setFormError("Please enter a number");
      return;
    }

    if (!category) {
      setFormError("Please select a category that describe your expense");
    }

    //NOTE: Expense object
    const expense = {
      // createdBy,
      uid,
      submitter,
      expenseName,
      amount,
      category: category.value,
      assignProject: pjName.value,
    };

    // console.log(expense);

    await addDocument(expense);

    setExpenseName("");
    setAmount("");
    setCategory("");
    setpjName("");
  };

  // NOTE: Local storage
  const handleCategory = (c) => {
    windowStorage.setItem(SELECT_CATEGORY_KEY, JSON.stringify(c));
    setCategory(c);
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <label>
          <span>Expense Name</span>
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Amount ($)</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Expense Category</span>
          <Select
            menuPlacement="auto"
            onChange={handleCategory}
            options={EXPENSECATEGORY}
            value={category}
          />
        </label>
        <label>
          <span>Related Project</span>
          <Select
            menuPlacement="auto"
            onChange={(options) => setpjName(options)}
            options={projectItems}
            value={pjName}
          />
        </label>
        <div>
          <button>Submit</button>
        </div>
      </FormWrapper>
    </>
  );
}
