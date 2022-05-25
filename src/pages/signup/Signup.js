// React modules
import React, { useEffect } from "react";
import { useAuthContext } from "../../hook/useContext";
import { useSignup } from "../../hook/useSignup";
import { useState } from "react";
import { Link } from "react-router-dom";
// component
import Navbar from "../../components/navbar/Navbar";
// styles
import {
  FileInput,
  FormWrapper,
  FormLeft,
  Wrapper,
  BGStyle,
  Container,
} from "../../global-style/Form.styled";

/////////////////////////////////////////////

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userImg, setUserImg] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const { user } = useAuthContext();
  const { signup, error, loading } = useSignup();

  const windowStorage = window.localStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    windowStorage.clear();
    signup(displayName, email, password, userImg);
  };

  useEffect(() => {
    if (windowStorage.getItem("displayName"))
      setDisplayName(windowStorage.getItem("displayName"));
    if (windowStorage.getItem("email"))
      setEmail(windowStorage.getItem("email"));
  }, []);

  useEffect(() => {
    windowStorage.setItem("displayName", displayName);
    windowStorage.setItem("email", email);
  }, [displayName, email]);

  const handleFileChange = (e) => {
    e.preventDefault();
    // prevent user has already uploaded it
    setUserImg(null);
    //Get the first item from an array
    let selectedImg = e.target.files[0];
    try {
      if (!selectedImg) {
        setUploadError("Please upload your avatar");
        return;
      }
      if (!selectedImg.type.includes("image")) {
        setUploadError("File must be an image ");
        return;
      }
      if (selectedImg.size > 100000) {
        setUploadError(
          "Image size must be less than 100kb, please click to upload again"
        );
        return;
      }
    } catch (error) {
      console.log(error.message);
    }

    setUploadError(null);
    setUserImg(selectedImg);
    console.log("Image uploaded");
  };

  return (
    <BGStyle>
      {!user && <Navbar />}
      <Container>
        <Wrapper>
          <FormLeft>
            <p>Stay organized</p>
            <h1>Glance</h1>
          </FormLeft>
          <FormWrapper onSubmit={handleSubmit}>
            <h2>Sign up</h2>

            <label>
              <span>Name</span>
              <input
                required
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>

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

            <label>
              <span>User Thumbnail</span>
              <FileInput required type="file" onChange={handleFileChange} />
              {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
            </label>
            {!loading && <button>Sign up</button>}
            {loading && <button disabled>Loading...</button>}
            <div>
              <p>
                Already a member? <Link to="/login">Login</Link> here
              </p>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </FormWrapper>
        </Wrapper>
      </Container>
      {/* <FooterCom /> */}
    </BGStyle>
  );
}
