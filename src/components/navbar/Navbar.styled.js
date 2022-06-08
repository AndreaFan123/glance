import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const NavbarWrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1rem;
  padding: 20px 30px;
  position: fixed;
  top: 0;

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${COLORS.mainColor};
  }
`;

export const Logo = styled.ul`
  font-size: 2rem;
  font-weight: 900;
`;

export const LoginWrap = styled.ul`
  display: flex;
  align-items: baseline;
  font-size: 1.2rem;
  gap: 40px;

  a {
    border-radius: 5px;
    border: 2px solid ${COLORS.mainColorMedium};
    padding: 8px 15px;
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
      background-color: ${COLORS.mainColor};
      color: ${COLORS.fontColorLight};
      border: none;
      border-radius: 15px;
    }

    &.active {
      background-color: ${COLORS.mainColor};
    }
  }
`;

export const NavWrap = styled.ul`
  display: flex;
  font-size: 1.2rem;
  align-items: baseline;
  gap: 90px;
`;
