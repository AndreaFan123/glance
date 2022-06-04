import React, { useState } from "react";

export default function EditBudget({ handleSave, budget }) {
  const [number, setNumber] = useState(budget);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => handleSave(number)}>Save</button>
    </>
  );
}
