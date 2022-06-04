import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  /* min-height: 100vh; */

  /* NOTE:  Added relative to see if can adjust position of sidebar and online users*/
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  flex-grow: 1;

  /* padding: 40px 30px 30px 30px; */
`;
