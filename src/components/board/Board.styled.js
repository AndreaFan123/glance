import styled from "styled-components";
import { COLORS } from "../constants";

export const BoardWrapper = styled.div`
  /* height: 90%; */
  min-width: 290px;
  border-radius: 5px;
  /* border: 1px solid ${COLORS.borderMedium};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05); */
  padding: 15px;
  overflow: hidden;
`;

export const BoardTop = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLORS.fontColorDark};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 20px;

  p {
    flex: 1;
  }

  span {
    color: ${COLORS.fontColorMedium};
    font-size: 1rem;
  }
`;

export const BoardCards = styled.div`
  /* height: 90%; */
  font-size: 1rem;
  background-color: ${COLORS.mainColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  overflow: auto;
`;

export const KanbanAddBoard = styled.div`
  min-width: 290px;
`;

export const DropdownMore = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;

  p {
    font-size: 0.8rem;
  }

  div {
    width: 100px;
  }
`;

export const DropDownPopup = styled.p`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fafafa;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.7);
  border-radius: 3px;
  padding: 10px;
`;
