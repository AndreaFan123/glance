import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  flex-grow: 1;
`;
