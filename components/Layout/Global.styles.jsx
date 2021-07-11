import { createGlobalStyle } from "styled-components";

import colors from "../../config/colors";

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

  a {
    color: ${colors.blue};
    text-decoration: none;
    @media screen and (min-width: 768px){
      &:hover{
        text-decoration:underline;
      }
    }
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
`;
