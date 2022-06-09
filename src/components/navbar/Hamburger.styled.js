import styled from "styled-components";
import { COLORS } from "../constants";

export const Hamburger = styled.ul`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  text-align: center;
  padding: 30px 0;
  transition: all 0.5s ease;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${COLORS.mainColor};
    :hover {
      color: #78ee;
    }
  }
`;
