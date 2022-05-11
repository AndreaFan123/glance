// React modules
import React from "react";
import {
  Background,
  FormWrapper,
  Wrapper,
  TextWrapper,
} from "../../global-style/Form.styled";

import FooterCom from "../../components/footer/FooterCom";

import { BiArrowBack } from "react-icons/bi";

export default function Signup() {
  return (
    <Background>
      <Wrapper>
        <TextWrapper>
          <p>Stay organized</p>
          <span> GLANCE</span>
          <a href="/">
            <BiArrowBack />
            <p>Go back</p>
          </a>
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
          <button type="submit">Sign up</button>
          <p>
            Already a member? <a href="/login"> Login </a> here
          </p>
        </FormWrapper>
      </Wrapper>
      <FooterCom />
    </Background>
  );
}
