// React modules
import React from "react";
import FooterCom from "../../components/footer/FooterCom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { useSignup } from "../../hook/useSignup";

// styles
import {
  Background,
  FormWrapper,
  Wrapper,
  TextWrapper,
} from "../../global-style/Form.styled";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, loading, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(name, email, password);
  };

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
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Become our member</h2>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <p>Password</p>
            <input
              type="password"
              value={password}
              placeholder="At least 6 digits"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!loading && <button>Sign up</button>}
          {loading && <button disabled>Loading...</button>}
          <p>
            Already a member? <a href="/login"> Login </a> here
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </FormWrapper>
      </Wrapper>
      <FooterCom />
    </Background>
  );
}
