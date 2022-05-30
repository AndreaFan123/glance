import styled from "styled-components";
import { COLORS } from "../constants";

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 14px;
  border-radius: 30px;
  color: ${COLORS.fontColorLight};
  background-color: ${COLORS.borderLight};
  width: fit-content;
  font-size: 1rem;
  gap: 10px;
  cursor: pointer;
`;
