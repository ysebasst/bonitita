import styled from "styled-components";

import colors from "../../config/colors";

export const ButtonStyled = styled.button`
  padding: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  color: ${colors.white};
  background-color: ${colors.pink};
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
