import React, { Fragment, useContext } from "react";
import "./CartButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../assets/StoreItems/CartContext";

library.add(faShoppingCart);

const HeaderButton = (props) => {
  const cartctx = useContext(CartContext); //cartctx can be anyname of ur choice

  const numberofitemsincart = cartctx.items.reduce((currentnumber, item) => {
    //reduce will allow us to tranform an array into a single number like we want to add anydish 3 items we cannot add it 3 times we simple put 3 and get it cart single timw with 3
    return currentnumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <div id="button" onClick={props.onClick}>
        <FontAwesomeIcon icon="shopping-cart" />
        <span>Cart</span>
        <span id="badge">{numberofitemsincart}</span>
      </div>
    </Fragment>
  );
};
export default HeaderButton;
