// React modules
import React from "react";
import {
  Background,
  FormWrapper,
  SignupWrapper,
  TextWrapper,
} from "./Signup.styled";

// Styles

export default function Signup() {
  return (
    <Background>
      <SignupWrapper>
        <TextWrapper>
          <p>
            Manage your team in one place, know your team at a
            <span> GLANCE</span>
          </p>
        </TextWrapper>
        <FormWrapper>
          <h2>Become our member</h2>
          <label>
            <p>Name</p>
            <input type="text" />
          </label>

          <label>
            <p>Email</p>
            <input type="email" />
          </label>

          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <button type="submit">Signup</button>
        </FormWrapper>
      </SignupWrapper>
    </Background>
  );
}
