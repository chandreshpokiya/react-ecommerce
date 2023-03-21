import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Cabin', sans-serif;
    }

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
    }

    ul,li{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
    a{
        text-decoration: none;
        color: #000;
        margin: 0px;
        padding: 0px;
    }

`;

export default GlobalStyles;
