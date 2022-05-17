import styled from "styled-components";
import { COLORS } from "../constants";

export const UserListWrapper = styled.div`
  width: 180px;
  min-width: 180px;

  /* display: flex;
  flex-direction: column */
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
  font-size: 1rem;

  h2 {
    padding: 30px 0;
    padding-left: 20px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-bottom: 20px;

  div {
    width: 40px;
    height: 40px;
  }

  span {
    display: inline-block;
    margin-right: 15px;
    width: 12px;
    height: 12px;
    background: #0ebb50;
    border-radius: 50%;
  }

  p {
    padding-left: 10px;
  }
`;
