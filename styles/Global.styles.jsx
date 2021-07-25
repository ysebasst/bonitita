import { createGlobalStyle } from "styled-components";

import colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${colors.black};
    background-color: #ddd;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  
`;
