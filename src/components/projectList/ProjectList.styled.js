import styled from "styled-components";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;

  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${COLORS.statusDelay};
  }
`;

export const ProjectLinks = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid ${COLORS.borderMedium};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  padding: 15px;
  text-decoration: none;

  div {
    display: flex;
    align-items: center;

    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: ${COLORS.mainColor};
      padding-right: 15px;
    }

    span {
      font-size: 0.9rem;
      font-weight: 700;
      color: ${COLORS.fontColorDark};
      padding: 2px 8px;
      border-radius: 20px;
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    border-bottom: 1px solid ${COLORS.borderLight};
    color: ${COLORS.fontColorDark};
    padding-top: 10px;
    padding-bottom: 10px;
    /* margin-top: 10px; */
    margin-bottom: 20px;
  }

  :hover {
    transition: 0.3s ease-in-out;
    transform: translateY(-5px);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const AssigneeWrapper = styled.div`
  width: 40px;
  height: 40px;

  ul {
    display: flex;
    gap: 10px;
    padding-left: 0;
  }

  li {
    list-style: none;
  }
`;

export const LodeMoreBtn = styled.button`
  margin: 20px 0;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
`;
