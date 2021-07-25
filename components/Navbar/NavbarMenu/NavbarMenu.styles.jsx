import styled from "styled-components";

import Wrapper from "../../../components/Wrapper";

import colors from "../../../config/colors";
import variables from "../../../config/variables";

// NAVBAR MENU
export const MenuStyled = styled.ul`
  position: absolute;
  top: ${variables.navbarHeight};
  left: 0;
  width: 100%;
  height: calc(100vh - ${variables.navbarHeight});
  overflow-y: auto;
  padding: 0 1rem;
  margin-top: 0;
  margin-bottom: 0;
  background-color: ${(props) =>
    props.show ? `${colors.black}80` : "transparent"};
  transition: transform 0.3s, background-color 0.3s ease-in-out 0.1s;
  transform-origin: top;
  transform: ${(props) => (props.show ? "scale(1, 1)" : "scale(1, 0)")};
`;

// MENU WRAPPER
export const MenuWrapper = styled(Wrapper)`
  background-color: ${colors.white};
  box-shadow: 0 1rem 1rem -1rem ${colors.black}20 inset;
`;

// MENU ITEM
export const MenuItem = styled.li`
  list-style: none;
`;

// MENU LINK
export const MenuLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${variables.navbarHeight};
  padding: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => (props.pageSelected ? colors.white : colors.darkPink)};
  background-color: ${(props) =>
    props.pageSelected ? `${colors.pink}C0` : "transparent"};
  cursor: pointer;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 0.5rem;
    background-color: ${colors.fuchsia};
    transition: transform 0.3s;
    transform-origin: bottom;
    transform: scale(1, 0.125);
  }

  @media screen and (min-width: 768px) {
    &:hover {
      color: ${(props) => (props.pageSelected ? colors.white : colors.fuchsia)};
      &::after {
        transform: scale(1, 1);
      }
    }
    &:active {
      transform: scale(0.99);
    }
  }
`;
