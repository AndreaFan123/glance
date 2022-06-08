import React from "react";
import {
  ContactWrapper,
  FormWrapper,
  SectionContainer,
} from "../sections.styled";

export default function Contact() {
  return (
    <SectionContainer>
      <ContactWrapper>
        <h2>Let's Connect</h2>
        <p>HIRE me!</p>
        <FormWrapper>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" />
          </label>

          <label>
            <span>Message</span>
            <textarea typp="text" />
          </label>
        </FormWrapper>
      </ContactWrapper>
    </SectionContainer>
  );
}
