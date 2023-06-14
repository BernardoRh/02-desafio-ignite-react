import { createGlobalStyle } from "styled-components"
import { defaultTheme } from "./Themes/Default"

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    html {
        overflow-x: hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background: ${defaultTheme['base-button']};
    }

    *::-webkit-scrollbar-thumb {
        background: ${defaultTheme['base-subtitle']};
    }

    *::-webkit-scrollbar-thumb:hover {
        background: ${defaultTheme['base-subtitle']};
    }

    body {
        background: ${defaultTheme['background']};
    }

    button, span, input, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        line-height: 130%;
    }

`