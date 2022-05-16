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
  padding: 15px;

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

export const LinksWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  font-size: 1.2rem;
  gap: 40px;

  button {
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${COLORS.mainColor};
    color: ${COLORS.fontColorLight};
  }
`;
