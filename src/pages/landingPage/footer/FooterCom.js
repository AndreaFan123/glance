import React from "react";
import { Link } from "react-router-dom";
// styles
import {
  Footer,
  FooterWrapper,
  IconWrapper,
  LinkWrapper,
  TextWrapper,
} from "./Footer.styled";

// icon
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function FooterCom() {
  return (
    <Footer>
      <FooterWrapper>
        <TextWrapper>
          <h1>Glance</h1>
          <p>Andrea Fan &copy; 2022 All Right Reserved</p>
        </TextWrapper>

        <LinkWrapper>
          <Link to="#about">About</Link>
          <Link to="#about">How it works</Link>
        </LinkWrapper>

        <IconWrapper>
          <Link to="https://github.com/AndreaFan123">
            <AiFillGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/andrea-fan-b98491b9/">
            <AiFillLinkedin />
          </Link>
        </IconWrapper>
      </FooterWrapper>
    </Footer>
  );
}
