import styled from "styled-components";
import { COLORS } from "../../components/constants";
import { Link } from "react-router-dom";

export const DashboardWrapper = styled.div`
  padding: 20px;
  /* width: 1060px; */
  max-width: 1200px;
  margin: 40px auto 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: ${COLORS.mainColor};
    margin-bottom: 20px;
    border-bottom: 2px solid ${COLORS.mainColor};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    margin-bottom: 15px;
  }
`;

export const MrktingWrapper = styled.div`
  /* width: 1060px;
  max-width: 1200px;
  margin: 35px auto; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding-bottom: 50px;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${COLORS.fontColorDark};
  width: 100%;
  height: 200px;
  border-radius: 5px;
  border: 1px solid ${COLORS.borderMedium};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
`;

export const IconBG = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${COLORS.iconBgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = {
  fontSize: "3rem",
  color: `${COLORS.iconColor}`,
};
