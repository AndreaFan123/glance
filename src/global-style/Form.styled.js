import styled from "styled-components";
import { COLORS } from "../components/constants";
import background_1 from "../assets/background_1.svg";

export const Background = styled.div`
  background: url(${background_1});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1000;
  position: absolute;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  gap: 14px;
  background-color: ${COLORS.mainColor};
  border-radius: 8px;
  box-shadow: -9px -2px 21px -14px rgba(224, 224, 224, 1);
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  width: 450px;
  color: ${COLORS.fontColorLight};
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  p {
    font-size: 1.4rem;
    font-weight: 300;
  }

  span {
    font-size: 5rem;
    /* border: 3px solid ${COLORS.fontColorLight}; */
    font-weight: 900;
  }

  a {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${COLORS.fontColorLight};
    position: absolute;
    bottom: 20px;

    p {
      padding-left: 10px;
    }
  }
`;

export const FormWrapper = styled.form`
  background-color: ${COLORS.fontColorLight};
  border-radius: 0 8px 8px 0;
  width: 450px;
  padding: 50px 30px;

  h2 {
    color: ${COLORS.mainColor};
    font-size: 1.5rem;
    padding-bottom: 25px;
  }

  label {
    font-size: 1rem;
    color: ${COLORS.fontColorMedium};
  }

  input {
    display: block;
    padding-left: 10px;
    color: ${COLORS.fontColorDark};
    width: 300px;
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${COLORS.fontColorMedium};
    margin-bottom: 25px;
  }

  button {
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.fontColorLight};
    background-color: ${COLORS.mainColor};
    border-radius: 8px;
    padding: 5px 25px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }

  a {
    color: ${COLORS.iconColor};
    font-weight: 700;
  }
`;
