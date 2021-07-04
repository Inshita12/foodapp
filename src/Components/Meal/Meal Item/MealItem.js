import React, { useContext } from "react";
import Card from "../../UI/Card/Card";
import MealForm from "../MealForm/MealForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../assets/StoreItems/CartContext";
library.add(faRupeeSign);
const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div>
      <Card>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd89oZj-L_wcSHVQ0vcLUFaP2fLcY-p9Km6A&usqp=CAU" alt=""></img>
        <li id="meal-item">
          <span id="meal-item-name">{props.name}</span>
          <span id="meal-item-description">{props.description}</span>
          <span id="meal-item-price">
            {" "}
            <FontAwesomeIcon icon="rupee-sign" />&ensp;
            {props.price}
            &ensp;
            <span>for one</span>
          </span>
        </li>
        <div>
          <MealForm id={props.id} onAddtoCart={addToCartHandler} />
        </div>
      </Card>
    </div>
  );
};
export default MealItems;
