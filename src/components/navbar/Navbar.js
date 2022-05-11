import React from "react";
import { Links, Logo, NavbarWrapper, NavItemWrapper } from "./Navbar.styled";
import { BiUserCircle, BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";

// import { NavbarContents } from "./NavContent";

export default function Navbar() {
  return (
    // Nav wrapper
    <NavbarWrapper>
      <Logo>
        <a href="/dashboard">Glance</a>
      </Logo>
      {/* Nav top */}
      <NavItemWrapper>
        <div>
          <Links href="/dashboard">
            <div>
              <BiGridAlt />
            </div>
            <p>Home</p>
          </Links>

          <Links href="/projects">
            <div>
              <BiFile />
            </div>
            <p>+ Project</p>
          </Links>
        </div>
        {/* Nav bottom */}
        <div>
          <Links href="/mamber">
            <div>
              <BiUserCircle />
            </div>
            <p>Jane Doe</p>
          </Links>

          <Links href="/login">
            <div>
              <BiLogOut />
            </div>
            <p>Logout</p>
          </Links>
        </div>
      </NavItemWrapper>
    </NavbarWrapper>
  );
}
