import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const ChatRoomWrapper = styled.main`
  border-radius: 5px 5px 0 0;
  border: 3px solid ${COLORS.mainColor};
  /* border-bottom: none; */
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin: 20px 20px 0 20px;
  padding: 10px;
  height: 85vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
    border-bottom: 2px solid ${COLORS.mainColor};
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.mainColor};
  }

  ::-webkit-scrollbar-thumb {
    /* width: 0.3rem; */
    background: ${COLORS.iconColor};
  }

  @media screen and (max-width: 600px) {
    margin: 40px 20px 0 20px;
    height: 80vh;
  }

  @media screen and (max-width: 400px) {
    margin: 0;
    border: none;
    padding: 3px;
    height: 85vh;
  }
`;

export const FormWrapper = styled.div`
  margin: 0 20px 0 20px;

  @media screen and (max-width: 400px) {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const FlexStretch = styled.div`
  flex: 1;

  input {
    font-size: 1rem;
    width: 100%;
    padding: 10px;
    border: 3px solid ${COLORS.mainColor};
    border-top: 0;
    border-radius: 0 0 0 5px;

    @media screen and (max-width: 400px) {
      border-radius: 0;
      border-top: 3px solid ${COLORS.mainColor};
    }
  }
`;

export const FlexNormal = styled.div`
  flex: 0;

  button {
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    padding: 10px 30px;
    white-space: nowrap;
    border: 3px solid ${COLORS.mainColor};
    border-top: 0;
    border-left: none;
    border-radius: 0 0 5px 0;
    background-color: ${COLORS.mainColor};
    color: ${COLORS.fontColorLight};

    :disabled {
      background-color: ${COLORS.mainColorMedium};
    }

    @media screen and (max-width: 400px) {
      border-radius: 0;
      border-top: 3px solid ${COLORS.mainColor};
    }
  }
`;
