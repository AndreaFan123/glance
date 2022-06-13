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
  z-index: -10;
  position: absolute;
`;

export const BackToHomePage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 5%;
  left: 43%;

  a {
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    color: ${COLORS.mainColor};
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${COLORS.iconColor};
    }
  }

  @media (max-width: 595px) {
    top: -85%;
    left: 18%;

    a {
      color: ${COLORS.fontColorLight};
      &:hover {
        color: ${COLORS.iconColor};
      }
    }
  }
`;

export const GoBackArrow = {
  color: `${COLORS.mainColor}`,
  fontSize: "1.3rem",
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 550px;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -3px -3px 24px -8px #9c9c9c;

  @media (max-width: 595px) {
    max-width: 400px;
    min-height: 350px;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
`;

export const FormLeft = styled.div`
  background-image: url(${signup});
  background-size: cover;
  width: 100%;
  width: 100%;
  max-width: 350px;
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

  @media (max-width: 595px) {
    max-width: 400px;
    padding: 20px;
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
    transition: all 0.3s ease;

    &:active {
      border-color: var(--drk-blue);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px hsl(227, 30%, 60%);
    }
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
    transition: all 0.3s ease;

    &:active {
      border-color: var(--drk-blue);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4);
    }
  }

  @media (max-width: 595px) {
    max-width: 400px;

    input {
      width: 100%;
    }
  }
`;

export const FileInput = styled.input.attrs(() => ({
  type: "file",
}))`
  font-size: 1rem;
`;
