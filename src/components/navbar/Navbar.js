import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginWrap, Logo, NavbarWrapper, NavWrap } from "./Navbar.styled";
import { useAuthContext } from "../../hook/useContext";
// import { useLogout } from "../../hook/useLogout";

export default function Navbar() {
  // const { logout, loading, error } = useLogout();
  const { user } = useAuthContext();
  return (
    <NavbarWrapper>
      <Logo>
        <li>
          <Link to="/">Glance</Link>
        </li>
      </Logo>

      <NavWrap>
        <li>
          <NavLink to="#abount">About</NavLink>
        </li>
        <li>
          <NavLink to="#how">How it works</NavLink>
        </li>
        <li>
          <NavLink to="#contact">Contact</NavLink>
        </li>
      </NavWrap>
      <LoginWrap>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </LoginWrap>
    </NavbarWrapper>
  );
}
