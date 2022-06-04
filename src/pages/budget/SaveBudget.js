import React from "react";

export default function SaveBudget({ handleEdit, budget }) {
  return (
    <>
      <p>Total Budget : $ {budget}</p>
      <button onClick={() => handleEdit()}>Edit</button>
    </>
  );
}
