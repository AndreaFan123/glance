import styled from "styled-components";
import { COLORS } from "../constants";

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100vh;
  background-color: ${COLORS.mainColor};
`;

export const NavListsWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

  ul {
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.3rem;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${COLORS.fontColorLight};
      }
    }
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;

  a {
    color: ${COLORS.fontColorLight};
    text-decoration: none;
  }
`;
