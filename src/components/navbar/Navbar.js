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
        <div>
          <Link to="/">Glance</Link>
        </div>
      </Logo>

      <NavWrap>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#howitworks">How it works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
