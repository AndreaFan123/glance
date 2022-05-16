// React modules
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useLogin } from "../../hook/useLogin";

// component
import FooterCom from "../../components/footer/FooterCom";

import {
  FileInput,
  FormWrapper,
  SignupLeft,
  SignupWrapper,
} from "../../global-style/Form.styled";
// icon
import { BiArrowBack } from "react-icons/bi";

/////////////////////////////////////////

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <SignupWrapper>
      <SignupLeft>
        <p>Stay organized</p>
        <h1>Glance</h1>
      </SignupLeft>
      <FormWrapper onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
        <div>
          <span>
            Not a member? <Link to="/signup">Sign up</Link> here
          </span>
        </div>
      </FormWrapper>
    </SignupWrapper>
  );
}
