import styled from "styled-components";
import { COLORS } from "../components/constants";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: ${COLORS.mainColor}; */
  padding: 100px 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 14px;
  font-family: "Nunito", sans-serif;
  /* padding: 15px; */
  /* border: 3px solid ${COLORS.fontColorLight}; */
  background-color: ${COLORS.mainColor};
  border-radius: 8px;
  box-shadow: -2px 9px 20px 0px rgba(209, 205, 205, 0.75);
  -webkit-box-shadow: -2px 9px 20px 0px rgba(209, 205, 205, 0.75);
  -moz-box-shadow: -2px 9px 20px 0px rgba(209, 205, 205, 0.75);
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  width: 450px;
  font-size: 2.3rem;
  color: ${COLORS.fontColorLight};
  padding: 20px;

  p {
    font-weight: 300;
  }

  span {
    font-weight: 900;
  }
`;

export const FormWrapper = styled.form`
  background-color: #fff;
  /* border: 3px solid ${COLORS.mainColor}; */
  border-radius: 0 8px 8px 0;
  width: 450px;
  padding: 20px;
`;
