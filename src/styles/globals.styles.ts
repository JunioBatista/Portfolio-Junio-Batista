import styled , { createGlobalStyle }  from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;  
  }

    body {
      background-image: url('/bg.jpg');
      background-size: cover;
      color: white;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'sans-serif';
      font-weight: 400;
    }
`;

export const DefaultContainer = styled.section`
    height: calc(100vh - 9.08rem );
`