import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    :root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    }

    .body {
        display: block;
    }
   
`;

export default GlobalStyles;
