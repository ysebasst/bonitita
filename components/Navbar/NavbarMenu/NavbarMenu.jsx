import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { routes } from "../../../config/routes";

import {
  MenuStyled,
  MenuWrapper,
  MenuItem,
  MenuLink,
} from "./NavbarMenu.styles";

export default function NavbarMenu({
  showMenu = false,
  setShowMenu = () => {},
}) {
  const router = useRouter();
  const menuDOMEl = useRef();

  const handleMenuClick = (e) => {
    if (e.target === menuDOMEl.current) {
      setShowMenu(false);
    }
  };

  return (
    <MenuStyled show={showMenu} ref={menuDOMEl} onClick={handleMenuClick}>
      <MenuWrapper>
        {routes.map((route, i) => (
          <MenuItem key={i}>
            <Link href={route.url}>
              <MenuLink
                pageSelected={route.url === router.asPath}
                onClick={() => setShowMenu(false)}
              >
                {route.name}
              </MenuLink>
            </Link>
          </MenuItem>
        ))}
      </MenuWrapper>
    </MenuStyled>
  );
}
