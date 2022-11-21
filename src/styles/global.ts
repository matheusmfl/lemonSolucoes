import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



    body{
        background-color: white;

        
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
    }

    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }
`;
