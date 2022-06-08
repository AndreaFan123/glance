import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  ImgWrapper,
  TextWrapper,
} from "../sections.styled";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionWrapper>
        <TextWrapper>
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. I
          </p>
        </TextWrapper>
        <ImgWrapper>
          {/* replace product page after finishing layout */}
          <img src="https://picsum.photos/seed/picsum/500/400" />
        </ImgWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
}
