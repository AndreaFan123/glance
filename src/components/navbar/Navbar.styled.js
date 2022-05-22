import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const NavbarWrapper = styled.nav`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background-color: ${COLORS.mainColor};
  padding: 20px 30px;

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${COLORS.fontColorLight};

    /* &:hover,
    &.active {
      background-color: #fff;
      color: ${COLORS.mainColor};

      padding: 10px 10px;
      border-radius: 15px;
    }

    &.active {
      color: ${COLORS.mainColor};
    } */
  }
`;

export const Logo = styled.ul`
  font-size: 2rem;
  font-weight: 900;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  font-size: 1.2rem;
  gap: 40px;

  a {
    border: 2px solid ${COLORS.fontColorLight};
    padding: 8px 15px;
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
      background-color: #fff;
      color: ${COLORS.mainColor};
      border: none;
      border-radius: 15px;
    }

    &.active {
      background-color: ${COLORS.mainColor};
    }
  }
`;
