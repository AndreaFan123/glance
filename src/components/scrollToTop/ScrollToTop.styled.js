import styled from "styled-components";
import { COLORS } from "../constants";

export const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  background-color: ${COLORS.mainColorMedium};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  bottom: 1rem;
  right: 4rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ToTopIcon = {
  fontSize: "1.8rem",
  fontWeight: "700",
  color: `${COLORS.fontColorLight}`,
};
