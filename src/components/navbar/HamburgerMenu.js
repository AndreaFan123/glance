import React from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "./Hamburger.styled";

export default function HamburgerMenu() {
  return (
    <Hamburger>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#howitworks">How it works</a>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Hamburger>
  );
}
