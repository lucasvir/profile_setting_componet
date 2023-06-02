import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        font-size: 1.6rem;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        /* color: ${({ theme }) => theme.COLORS.LIGHT_100}; */
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }   
`;