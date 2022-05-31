import React from "react";

export default function EditBudget({ handleEdit, budget }) {
  return (
    <>
      <p>Total Budget : $ {budget}</p>
      <button onClick={() => handleEdit()}>Edit</button>
    </>
  );
}
