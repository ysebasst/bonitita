import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../Wrapper";

import colors from "../../config/colors";
import v from "../../config/variables";

// NAVBAR
export const NavbarStyled = styled.nav`
  z-index: 50;
  position: sticky;
  top: 0;
  height: ${v.navbarHeight};
  padding: 0 1rem;
  color: ${colors.white};
  background-color: ${colors.white};
  user-select: none;
`;

// NAVBAR WRAPPER
export const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${v.navbarHeight};
`;

// NAVBAR BRAND
export const BrandStyled = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
`;

// NAVBAR TOGGLE
export const ToggleStyled = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: transform 0.1s;
  &:active {
    transform: scale(0.9);
  }
`;

// NAVBAR ICON
export const IconStyled = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${colors.fuchsia};
`;

// NAVBAR BACKGROUND
export const BackgroundStyled = styled.div`
  position: absolute;
  top: ${v.navbarHeight};
  left: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: calc(100vh - ${v.navbarHeight});
  background-color: ${(props) =>
    props.show ? `${colors.black}80` : "transparent"};
`;

// NAVBAR MENU
export const MenuStyled = styled.ul`
  position: absolute;
  top: ${v.navbarHeight};
  left: 0;
  width: 100%;
  max-height: calc(100vh - ${v.navbarHeight});
  overflow-y: auto;
  padding: 0 1rem;
  margin-top: 0;
  margin-bottom: 0;
  box-shadow: 0 1rem 1rem -1rem ${colors.black}20 inset;
  transition: transform 0.3s;
  transform-origin: top;
  transform: ${(props) => (props.show ? "scale(1, 1)" : "scale(1, 0)")};
  & > div {
    background-color: ${colors.white};
    box-shadow: 0 1rem 2rem -1rem ${colors.black}40,
      0 1rem 1rem -1rem ${colors.black}20 inset;
  }
`;

// NAVBAR ITEM
export const ItemStyled = styled.li`
  list-style: none;
`;

// NAVBAR LINK
export const LinkStyled = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  min-height: ${v.navbarHeight};
  padding: 0.5rem 0.5rem 0.5rem 4rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => (props.pageSelected ? colors.white : colors.darkPink)};
  background-color: ${(props) =>
    props.pageSelected ? colors.pink + "C0" : "transparent"};
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
      text-decoration: none;
      color: ${(props) => (props.pageSelected ? colors.white : colors.fuchsia)};
      /* background-color: ${colors.pink}; */
      &::after {
        transform: scale(1, 1);
      }
    }
    &:active {
      transform: scale(0.99);
    }
  }
`;
