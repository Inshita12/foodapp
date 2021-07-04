import React, { Fragment } from "react";
import CartButton from "../CartButton/CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <div id="header">
        <span id="logo">Inshito</span>
        <CartButton onClick={props.onCartShown} />
      </div>
    </Fragment>
  );
};
export default Header;
