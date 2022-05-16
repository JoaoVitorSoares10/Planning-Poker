import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 98.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
        @media(max-width: 480px){
            font-size: 76.5%;
        }
        @media(max-width: 420px){
            font-size: 66%;
        }
        @media(max-width: 360px){
            font-size: 55%;
        }
    }

    body{
        -webkit-font-smoothing: antialiased;
        color: #555;
    }

    body, input, textarea {
        font-family: 'poppins', sans-serif;
        font-weight: 400;

        outline: 0;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;