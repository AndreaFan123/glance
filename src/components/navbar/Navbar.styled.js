import styled from "styled-components";
import { COLORS } from "../constants";

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100vh;
  background-color: ${COLORS.mainColor};
  padding: 20px 0 20px 0;

  a {
    text-decoration: none;
    color: ${COLORS.fontColorLight};
  }
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  padding-left: 20px;
  padding-bottom: 15px;

  a:hover {
    transition: all 0.5s ease-in-out;
    color: ${COLORS.iconColor};
  }
`;

export const NavItemWrapper = styled.nav`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Links = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 10px 0 10px 20px;

  &:hover {
    /* transition animation, grow from right to left */
    background-color: ${COLORS.iconColor};
    border-radius: 25px 0 0 25px;
  }

  div {
    padding-right: 10px;
  }
`;
