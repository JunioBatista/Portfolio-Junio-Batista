import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

    body {
      background-color: #333;
      color: white;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'sans-serif';
      font-weight: 400;
    }

`;