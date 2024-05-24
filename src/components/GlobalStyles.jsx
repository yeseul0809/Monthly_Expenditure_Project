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
    .swal2-icon {
    display: flex !important;
    justify-content: center !important;
    margin: auto;
    }
   
`;

export default GlobalStyles;
