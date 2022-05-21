import React from "react";
import { AvatarWrapper } from "./Avatar.styled";

export default function Avatar({ src }) {
  return (
    <AvatarWrapper>
      <img src={src} alt="use avatar" />
    </AvatarWrapper>
  );
}
