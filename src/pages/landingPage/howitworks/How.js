import React from "react";
import {
  SectionContainer,
  ImgWrapper,
  TextWrapper,
  HowitWorksSection,
  HowitWorksGrid,
  Slogan,
  Number,
  WordEffect,
} from "../sections.styled";

// Images
import MockupDashboard from "../../../assets/MockupDashboard.png";
import MockupBudget from "../../../assets/MockupBudget.png";
import MockupAddProject from "../../../assets/MockupAddProject.png";

export default function How() {
  return (
    <SectionContainer id="howitworks">
      <TextWrapper>
        <h3>How it works</h3>
        <Slogan>
          Follow the simple steps below, create your own{" "}
          <WordEffect>knowledgebase</WordEffect> in a second!
        </Slogan>
      </TextWrapper>
      <HowitWorksSection>
        {/* Dashboard */}
        <HowitWorksGrid>
          <TextWrapper>
            <Number>01</Number>
            <h3>Dashboard</h3>
            <Slogan>
              Manage all in <WordEffect>one place</WordEffect>!
            </Slogan>
          </TextWrapper>
          <ImgWrapper>
            <img src={MockupDashboard} alt="how it works-dashboard tutorial" />
          </ImgWrapper>
        </HowitWorksGrid>
        {/* Add project */}
        <HowitWorksGrid>
          <ImgWrapper>
            <img src={MockupAddProject} alt="how it works-dashboard tutorial" />
          </ImgWrapper>
          <TextWrapper>
            <Number>02</Number>
            <h3>Add project</h3>
            <Slogan>
              Write down your idea is never been{" "}
              <WordEffect>so easy</WordEffect>!
            </Slogan>
          </TextWrapper>
        </HowitWorksGrid>

        {/* Budget */}
        <HowitWorksGrid>
          <TextWrapper>
            <Number>03</Number>
            <h3>Add Budget</h3>
            <Slogan>
              Assign budget to relevant project, keep tracking your spending,{" "}
              <WordEffect>never lost!</WordEffect>
            </Slogan>
          </TextWrapper>
          <ImgWrapper>
            <img src={MockupBudget} alt="how it works-dashboard tutorial" />
          </ImgWrapper>
        </HowitWorksGrid>

        {/* Chatroom, wait til complete tweaking */}
        <HowitWorksGrid>
          <ImgWrapper>
            <img src={MockupDashboard} alt="how it works-dashboard tutorial" />
          </ImgWrapper>
          <TextWrapper>
            <Number>04</Number>
            <h3>Sync up anytime</h3>
            <Slogan>
              No need to open another tool, discuss right here, be{" "}
              <WordEffect>EFFICIENT</WordEffect>!
            </Slogan>
          </TextWrapper>
        </HowitWorksGrid>
      </HowitWorksSection>
    </SectionContainer>
  );
}
