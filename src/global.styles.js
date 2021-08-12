import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.App {
    margin: 0;
    font-family: "Archivo Black", sans-serif;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
`;