import { initializeApp } from "firebase/app";
import styled from "styled-components";
import { COLORS } from "../constants";

export const UserListWrapper = styled.div`
  width: 180px;
  min-width: 180px;
  min-height: 100vh;

  /* display: flex;
  flex-direction: column */
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
  font-size: 1rem;

  h2 {
    margin: 20px 35px;
  }

  @media (max-width: 1178px) {
    /* width: 100vw; */
    width: 100%;
    min-height: 70px;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    display: flex;
    justify-content: center;

    h2 {
      display: none;
    }
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

    @media (max-width: 1178px) {
      position: absolute;
      top: 14px;
      left: 40px;
    }
  }

  p {
    padding-left: 10px;
  }

  @media (max-width: 1178px) {
    padding: 0 10px;
    position: relative;

    p {
      display: none;
    }
  }
`;
