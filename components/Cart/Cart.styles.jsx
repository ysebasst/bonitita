import styled from "styled-components";

import variables from "../../config/variables";
import colors from "../../config/colors";

// Cart Menu
export const CartMenuStyled = styled.div`
  position: fixed;
  top: ${variables.navbarHeight};
  right: 0;
  width: 100%;
  max-width: 378px;
  height: calc(100vh - ${variables.navbarHeight});
  overflow-y: auto;
  background-color: ${colors.pink}A0;
  transition: transform 0.3s;
  transform-origin: right;
  transform: ${(props) => (props.show ? "scale(1,1)" : "scale(0,1)")};
`;

// Cart Menu Close
export const CartMenuCloseStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  color: ${colors.white};
  background-color: ${colors.black}80;
`;
