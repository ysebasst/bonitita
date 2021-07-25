import { forwardRef } from "react";

import { LinkStyled } from "./LinkHTML.styles";

export default forwardRef((props, ref) => {
  return <LinkStyled ref={ref} {...props} />;
});
