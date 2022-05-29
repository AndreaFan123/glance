import React, { useState } from "react";
import {
  BoardCards,
  BoardTop,
  BoardWrapper,
  DropdownMore,
  DropDownPopup,
} from "./Board.styled";

//icon
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Card from "../card/Card";
import AddItem from "../addItem/AddItem";
import DropDown from "../dropdown/Dropdown";

export default function Board(props) {
  // show delete msg when click dots
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <BoardWrapper>
      <BoardTop>
        <p>
          To Do <span>2</span>
        </p>
        <DropdownMore
          onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        >
          <HiOutlineDotsHorizontal style={{ display: "block" }} />
          {showDropdown && (
            <DropDown>
              <DropDownPopup onClick={() => console.log("Deleted")}>
                Delete Board
              </DropDownPopup>
            </DropDown>
          )}
        </DropdownMore>
      </BoardTop>

      <BoardCards>
        {/* <Card />
        <Card /> */}
        <AddItem text="+ Add Card" placeholder="Enter card title" />
      </BoardCards>
    </BoardWrapper>
  );
}
