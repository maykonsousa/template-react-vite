import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 480px) {
            font-size: 75%;
        }


    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors['text-base']};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;

    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        color: ${({ theme }) => theme.colors['text-title']};
    }

    button {
        cursor: pointer;

    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
        color: inherit;

    }
`;
