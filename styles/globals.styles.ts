import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Hanken Grotesk', sans-serif;
  }

    body {
      background-color: #151930;
      color: white;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'sans-serif';
      font-weight: 400;
    }

    /* THEME
    AMARELO - FDC131
    BRANCO AMARELADO - F9F2E7
    ROSÉ - F7B1C3
    ROXO500- 47467B
    ROXO100- 7867BF */

`;