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

  @media (max-width: 590px) {
    ul {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
`;

export const Toggle = styled.div`
  display: none;

  @media screen and (max-width: 590px) {
    display: block;
    z-index: 100;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
`;

export const Menu = {
  fontSize: "2.5rem",
  color: `${COLORS.mainColor}`,
};

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
  gap: 70px;

  li {
    a {
      text-decoration: none;
      color: ${COLORS.mainColor};

      &:hover {
        color: #78ee;
        border-bottom: 1px solid #78ee;
      }
    }
    &:first-of-type,
    :active {
      a {
        font-weight: 900;
      }
    }
  }

  @media screen and (max-width: 650px) {
    gap: 40px;
  }
`;
