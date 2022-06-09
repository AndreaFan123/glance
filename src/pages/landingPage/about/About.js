import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  ImgWrapper,
  TextWrapper,
  Slogan,
} from "../sections.styled";

import MockupAbout from "../../../assets/MockupAbout.png";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionWrapper>
        <TextWrapper>
          <h3>About</h3>
          <Slogan>
            Simple knowledgebase for small team. One place with intuitive tools
            that can help you be efficient.
          </Slogan>
        </TextWrapper>

        <ImgWrapper>
          <img src={MockupAbout} alt="about glance" />
        </ImgWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
}
