import React from "react";
import { Logo, NavbarWrapper, NavList, NavListsWrapper } from "./Navbar.styled";
import { BiUserCircle, BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";
// import { NavbarContents } from "./NavContent";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavListsWrapper>
        {/* top section */}
        <div>
          <Logo>
            <a href="/">Glance</a>
          </Logo>
          <ul>
            <li>
              <a href="/">
                <BiGridAlt />
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="projects">
                <BiFile />
                <p>Project</p>
              </a>
            </li>
          </ul>
        </div>
        {/* bottom section */}
        <div>
          <ul>
            <li>
              <a href="/member">
                <BiUserCircle />
                <p>User</p>
              </a>
            </li>
            <li>
              <a href="/login">
                <BiLogOut />
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
      </NavListsWrapper>
    </NavbarWrapper>
  );
}
