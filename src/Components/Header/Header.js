import React, { Fragment } from "react";
import foodimage from "../../assets/foodimage.jpg";
import CartButton from "../CartButton/CartButton";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <div id="header">
        <h2>FOOD APP</h2>
        <CartButton onClick={props.onCartShown}/>
      </div>
      <img src={foodimage} alt="" />
     
    </Fragment>
  );
};
export default Header;
