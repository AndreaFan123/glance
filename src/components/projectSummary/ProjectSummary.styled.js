import styled from "styled-components";
import { COLORS } from "../constants";

export const DetailsWrapper = styled.div`
  border: 1px solid ${COLORS.borderLight};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 25px;
  color: ${COLORS.fontColorDark};
  font-family: sans-serif;
  font-size: 1rem;

  h1,
  h3,
  h4 {
    color: ${COLORS.mainColor};
  }
`;

export const TitleWrapper = styled.div`
  border-bottom: 0.5px solid ${COLORS.borderMedium};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    padding-bottom: 5px;
  }

  span {
    color: ${COLORS.fontColorMedium};
    display: block;
  }
`;

export const ContentWrapper = styled.div`
  margin: 20px 0;
  border-bottom: 0.5px solid ${COLORS.borderMedium};

  h3 {
    font-size: 1.2rem;
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 20px;
    white-space: pre-wrap;
  }
`;

export const StakeholderWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 15px;
  h4 {
    padding-right: 15px;
  }

  span {
    background-color: ${COLORS.borderLight};
    border-radius: 20px;
    padding: 2px 15px;
  }
`;

export const AssigneeWrapper = styled.div`
  display: flex;
  align-items: center;

  h4 {
    padding-right: 15px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`;

export const CompleteIcon = {
  fontSize: "1.6rem",
  fontWeight: "700",
  color: "#6FB464",
  cursor: "pointer",
};

export const DeleteIcon = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#DA2525",
  marginLeft: "15px",
  cursor: "pointer",
};
