import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { CartMenuStyled, CartMenuCloseStyled } from "./Cart.styles";

export default function Cart({ children, show = false, onClick = () => {} }) {
  return (
    <CartMenuStyled show={show}>
      <CartMenuCloseStyled
        role="button"
        aria-label="close cart"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faTimes} />
      </CartMenuCloseStyled>
      {children}
    </CartMenuStyled>
  );
}
