import React, { useState } from "react";

//icons

import { IoClose } from "react-icons/io5";
import { AddItemCard, FormActionBtn, FormWrapper } from "./AddItem.styled";

export default function AddItem(props) {
  const [cardEdit, setCardEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Added");
  };

  return (
    <AddItemCard>
      {/* If cardEdit is true, show form, else not show anything */}
      {cardEdit ? (
        <FormWrapper onSubmit={handleSubmit}>
          <input
            autoFocus
            type="text"
            placeholder={props.placeholder || "Enter item"}
            // defaultValue={props.text}
          ></input>
          <FormActionBtn>
            <button type="submit">{props.btnText || "Add"}</button>
            <IoClose onClick={() => setCardEdit(false)} />
          </FormActionBtn>
        </FormWrapper>
      ) : (
        <p onClick={() => setCardEdit(true)}>{props.text || "+ Add item"}</p>
      )}
    </AddItemCard>
  );
}
