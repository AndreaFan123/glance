import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Nunito"); */

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    
    
    margin: 0;
  }

  html, body {
    
    height: 100%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 62.5%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  image, svg, picture {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit
  }

  p, h1, h2, h3 {
    overflow: break-word;
  }

  #root, #__next {
  isolation: isolate;
}

`;
