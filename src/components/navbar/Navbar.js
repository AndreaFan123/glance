import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import {
  LoginWrap,
  Logo,
  NavbarWrapper,
  NavWrap,
  Menu,
  Toggle,
} from "./Navbar.styled";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <NavbarWrapper>
        <Logo>
          <div>
            <Link to="/">Glance</Link>
          </div>
        </Logo>
        {/* toggle */}
        <Toggle>
          {hamburger ? (
            <div onClick={() => setHamburger(false)}>
              <CgClose style={Menu} />
            </div>
          ) : (
            <div onClick={() => setHamburger(true)}>
              <HiOutlineMenu style={Menu} />
            </div>
          )}
        </Toggle>
        <NavWrap>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#howitworks">How it works</a>
          </li>
        </NavWrap>
        <LoginWrap>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </LoginWrap>
      </NavbarWrapper>
      {hamburger && <HamburgerMenu />}
    </>
  );
}
