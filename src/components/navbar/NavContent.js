import React from "react";
import { BiUserCircle, BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";

export const NavbarContents = [
  {
    uid: "home",
    title: "Home",
    icon: <BiGridAlt />,
    link: "/",
  },
  {
    uid: "project",
    title: "Project",
    icon: <BiFile />,
    link: "/project/:id",
  },
  {
    uid: "user",
    title: "User",
    icon: <BiUserCircle />,
    link: "/user",
  },
  {
    uid: "logout",
    title: "Logout",
    icon: <BiLogOut />,
    link: "/logout",
  },
];
