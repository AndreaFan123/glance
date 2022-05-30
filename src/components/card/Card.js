import React, { useState } from "react";
import { COLORS } from "../constants";

//icon
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";

// component
import Labels from "../labels/Labels";
import DropDown from "../dropdown/Dropdown";

//styles
import { CardInfo, CardTitle, CardTop, CardWrapper } from "./Card.styled";
import { DropdownMore, DropDownPopup } from "../board/Board.styled";

export default function Card() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <CardWrapper>
      <CardTop>
        <Labels text="urgent" color={`${COLORS.statusDelay}`} />

        <DropdownMore
          onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        >
          <HiOutlineDotsHorizontal style={{ display: "block" }} />
          {showDropdown && (
            <DropDown>
              <DropDownPopup onClick={() => console.log("Deleted")}>
                Delete Card
              </DropDownPopup>
            </DropDown>
          )}
        </DropdownMore>
      </CardTop>
      <CardTitle>
        <p>Redesign homepage</p>
      </CardTitle>
      <CardInfo>
        <p>
          <AiOutlineClockCircle /> 23rd Sep 2022
        </p>
        <p>
          <IoMdCheckboxOutline /> 1/3
        </p>
      </CardInfo>
    </CardWrapper>
  );
}
