import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  ImgWrapper,
  TextWrapper,
  HowitWorksSection,
  HowitWorksGrid,
} from "../sections.styled";

// Images
import MockupDashboard from "../../../assets/MockupDashboard.png";
import MockupBudget from "../../../assets/MockupBudget.png";
import MockupAddProject from "../../../assets/MockupAddProject.png";

export default function How() {
  return (
    <SectionContainer>
      <TextWrapper>
        <h2>How it works</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. I
        </p>
      </TextWrapper>
      <HowitWorksSection>
        {/* Dashboard */}
        <HowitWorksGrid>
          <TextWrapper>
            <p>01</p>
            <h3>Dashboard</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
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
            <p>02</p>
            <h3>Add project</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
          </TextWrapper>
        </HowitWorksGrid>

        {/* Budget */}
        <HowitWorksGrid>
          <TextWrapper>
            <p>03</p>
            <h3>Add Budget</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
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
            <p>04</p>
            <h3>Sync up anytime</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </p>
          </TextWrapper>
        </HowitWorksGrid>
      </HowitWorksSection>
    </SectionContainer>
  );
}
