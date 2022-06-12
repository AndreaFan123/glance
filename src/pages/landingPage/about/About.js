import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  ImgWrapper,
  TextWrapper,
  Slogan,
  WordEffect,
} from "../sections.styled";

import MockupAbout from "../../../assets/MockupAbout.png";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionWrapper>
        <TextWrapper>
          <h3>About</h3>
          <Slogan>
            <WordEffect>Simple</WordEffect> knowledgebase for you and your team.
          </Slogan>
        </TextWrapper>

        <ImgWrapper>
          <img src={MockupAbout} alt="about glance" />
        </ImgWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
}
