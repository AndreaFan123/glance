import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const CommentWrapper = styled.div`
  font-size: 1rem;
  border: 1px solid ${COLORS.borderLight};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 15px;

  h4 {
    font-size: 1.1rem;
    color: ${COLORS.mainColor};
    margin-bottom: 15px;
  }

  label {
    display: grid;
    margin-bottom: 15px;

    textarea {
      border: 1px solid ${COLORS.borderMedium};
      border-radius: 5px;
      padding: 10px;
    }
  }

  button {
    background-color: ${COLORS.mainColor};
    border: none;
    border-radius: 5px;
    padding: 10px 25px;
    color: ${COLORS.fontColorLight};
    font-weight: 700;
  }
`;

export const CommentFlexWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.borderLight};
  margin-bottom: 20px;
  padding-bottom: 20px;

  p {
    color: ${COLORS.fontColorDark};
  }
`;

export const CommentWrap = styled.div`
  padding-left: 20px;
`;

export const NameDateFelx = styled.div`
  display: flex;
  align-items: baseline;

  h4 {
    margin-bottom: 0;
    padding-right: 10px;
  }

  span {
    color: ${COLORS.fontColorMedium};
    font-size: 0.8rem;
  }
`;
