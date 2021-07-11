import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Wrapper from "../Wrapper";
import { routes } from "../../config/routes";

import {
  NavbarStyled,
  WrapperStyled,
  ToggleStyled,
  IconStyled,
  BrandStyled,
  BackgroundStyled,
  MenuStyled,
  ItemStyled,
  LinkStyled,
} from "./Navbar.styles";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/images/logo.png";

export default function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [urlNow, setUrlNow] = useState({});
  const menuRef = useRef();
  const backgroundRef = useRef();

  const router = useRouter();

  useEffect(() => {
    setUrlNow(router);
  }, [router]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style = "";
    }
  }, [showMenu]);

  const handleClickMenu = (e) => {
    if (e.target === menuRef.current || e.target === backgroundRef.current) {
      setShowMenu(false);
    }
  };

  return (
    <NavbarStyled>
      <WrapperStyled>
        <ToggleStyled
          role="button"
          aria-label="button"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IconStyled icon={faBars} />
        </ToggleStyled>
        <Link href="/">
          <BrandStyled>
            <Image
              src={logo}
              alt="logo bonitita express"
              height={56}
              width={121.48}
            />
          </BrandStyled>
        </Link>
        <BackgroundStyled
          show={showMenu}
          ref={backgroundRef}
          onClick={handleClickMenu}
        />
        <MenuStyled show={showMenu} ref={menuRef} onClick={handleClickMenu}>
          <Wrapper>
            {routes.map((route, i) => (
              <ItemStyled key={i}>
                <Link href={route.url}>
                  <LinkStyled
                    pageSelected={urlNow.asPath === route.url}
                    onClick={() => setShowMenu(false)}
                  >
                    {route.name}
                  </LinkStyled>
                </Link>
              </ItemStyled>
            ))}
          </Wrapper>
        </MenuStyled>
      </WrapperStyled>
    </NavbarStyled>
  );
}
