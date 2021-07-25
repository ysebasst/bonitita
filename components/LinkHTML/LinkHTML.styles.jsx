import styled from "styled-components";

import colors from "../../config/colors";

export const LinkStyled = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
