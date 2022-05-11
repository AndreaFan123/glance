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

export default function Login() {
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
          <h2>Welcome back</h2>

          <label>
            <p>Email</p>
            <input type="email" />
          </label>

          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <button type="submit">Signup</button>
          <p>
            Not a member yet?<a href="/signup"> Signup </a> here
          </p>
        </FormWrapper>
      </Wrapper>
      <FooterCom />
    </Background>
  );
}
