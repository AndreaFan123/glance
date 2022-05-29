import React from "react";
//icons
import { IoCloseOutline } from "react-icons/io5";
import { LabelWrapper } from "./Labels.styled";
import { COLORS } from "../constants";

// Takes props from card component
export default function Labels(props) {
  return (
    <LabelWrapper
      style={{
        backgroundColor: props.color,
      }}
    >
      {props.text}
      {props.close && (
        <IoCloseOutline onClick={() => (props.onClose ? props.close : "")} />
      )}
    </LabelWrapper>
  );
}
