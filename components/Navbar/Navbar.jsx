import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  NavbarStyled,
  NavbarWrapper,
  NavbarButton,
  NavbarIcon,
  NavbarLogo,
} from "./Navbar.styles";

import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style = "";
    }
  }, [showMenu]);

  return (
    <NavbarStyled>
      <NavbarWrapper>
        <NavbarButton onClick={() => setShowMenu(!showMenu)}>
          <NavbarIcon icon={faBars} />
        </NavbarButton>
        <NavbarLogo
          src="/images/logo.png"
          alt="logo bonitita express"
          onClick={() => router.push("/")}
        />
        <NavbarMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <NavbarButton onClick={() => {}}>
          <NavbarIcon icon={faUser} />
        </NavbarButton>
      </NavbarWrapper>
    </NavbarStyled>
  );
}
