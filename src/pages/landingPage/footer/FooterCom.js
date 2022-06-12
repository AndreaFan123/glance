import React from "react";
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
          <a href="#about">
            <h1>Glance</h1>
          </a>
          <p>Andrea Fan &copy; 2022 All Right Reserved</p>
        </TextWrapper>

        <LinkWrapper>
          <a href="#about">About</a>
          <a href="#howitworks">How it works</a>
        </LinkWrapper>

        <IconWrapper>
          <a href="https://github.com/AndreaFan123" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andrea-fan-b98491b9/"
            target="
            _blank"
          >
            <AiFillLinkedin />
          </a>
        </IconWrapper>
      </FooterWrapper>
    </Footer>
  );
}
