import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hook/useLogin";
import { useAuthContext } from "../../hook/useContext";
// styles
import {
  FormWrapper,
  FormLeft,
  Wrapper,
  BGStyle,
  Container,
} from "../../global-style/Form.styled";

/////////////////////////////////////////

export default function Login() {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("1234567");
  const { login, loading, error } = useLogin();
  const { user } = useAuthContext();

  const windowStorage = window.localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    windowStorage.clear();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (windowStorage.getItem("email"))
      setEmail(windowStorage.getItem("email"));
  }, []);

  useEffect(() => {
    windowStorage.setItem("email", email);
  }, [email]);

  return (
    <BGStyle>
      <Container>
        <Wrapper>
          <FormLeft>
            <p>Stay organized</p>
            <h1>Glance</h1>
          </FormLeft>
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

            {!loading && <button>Login</button>}
            {loading && <button>Loading ...</button>}
            <div>
              <span>
                Not a member? <Link to="/signup">Sign up</Link> here
              </span>
              <div>
                <Link to="/">Back to home page</Link>
              </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </FormWrapper>
        </Wrapper>
      </Container>
    </BGStyle>
  );
}
