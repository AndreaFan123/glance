import styled from "styled-components";
import { COLORS } from "../components/constants";
import background_3 from "../assets/background_3.svg";
import signup from "../assets/signup.png";

export const BGStyle = styled.div`
  background-image: url(${background_3});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1000;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 550px;
  /* gap: 30px; */
  margin: 20px auto;
  display: flex;
  justify-content: center;
  display: flex;
  /* background-color: ${COLORS.fontColorMedium}; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -3px -3px 24px -8px #9c9c9c;
`;

export const FormLeft = styled.div`
  background-image: url(${signup});
  background-size: cover;
  width: 100%;
  width: 100%;
  max-width: 350px;
  /* background-color: ${COLORS.mainColor}; */
  color: ${COLORS.fontColorLight};
  padding-top: 90px;
  padding-left: 30px;
  padding-right: 30px;

  p {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 3.5rem;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
  font-weight: 300;
  color: ${COLORS.fontColorMedium};
  width: 100%;
  padding: 20px;
  background-color: ${COLORS.fontColorLight};

  /* display: flex;
  flex-direction: column; */

  h2 {
    color: ${COLORS.fontColorDark};
    margin-bottom: 20px;
  }

  a {
    color: ${COLORS.mainColor};
    font-weight: 700;
  }

  input {
    width: 310px;
    display: block;
    border: none;
    background-color: #fff;
    padding: 8px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
  }

  button {
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    background-color: ${COLORS.mainColor};
    color: ${COLORS.fontColorLight};
    padding: 8px 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const FileInput = styled.input.attrs(() => ({
  type: "file",
}))`
  font-size: 1rem;
`;
