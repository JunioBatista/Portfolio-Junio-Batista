import styled , { createGlobalStyle }  from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;  
  }

    body {
      background-image: url('/bg.jpg');
      background-size: cover;
      color: white;
      -webkit-font-smoothing: antialiased;
      position: relative;
    }

    body, input, textarea, button {
      font-family: 'sans-serif';
      font-weight: 400;
    }
`;

export const DefaultContainer = styled.section`
  max-width: 100vw;
  height: calc(100vh - 4.1rem);
  display: flex;
  overflow: hidden;

`