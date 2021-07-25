import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../Wrapper";

import colors from "../../config/colors";
import variables from "../../config/variables";

// NAVBAR
export const NavbarStyled = styled.nav`
  z-index: 50;
  position: sticky;
  top: 0;
  height: ${variables.navbarHeight};
  padding: 0 1rem;
  color: ${colors.white};
  background-color: ${colors.white};
  user-select: none;
`;

// NAVBAR WRAPPER
export const NavbarWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${variables.navbarHeight};
`;

// NAVBAR BUTTON
export const NavbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  border: none;
  outline: 2px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.1s, outline 0.3s;
  @media screen and (min-width: 768px) {
    &:hover {
      outline: 2px solid ${colors.fuchsia};
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

// NAVBAR ICON
export const NavbarIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${colors.fuchsia};
`;

// NAVBAR LOGO
export const NavbarLogo = styled.img`
  height: ${variables.navbarHeight};
  cursor: pointer;
`;
