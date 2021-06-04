import React,{useContext} from "react";
import Card from "../../UI/Card/Card";
import MealForm from "../MealForm/MealForm";
import "./MealItem.css";
import CartContext from '../../../assets/StoreItems/CartContext';

const MealItems = (props) => {
    const cartCtx=useContext(CartContext);
  const addToCartHandler = (amount) => {
cartCtx.additem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
});
  };
  return (
    <div>
      <Card>
        <li id="meal-item">
          <h3>{props.name}</h3>
          <div id="meal-item__description">{props.description}</div>
          <div id="meal-item__price">Rs.{props.price}</div>
        </li>
        <div>
          <MealForm id={props.id} onAddtoCart={addToCartHandler} />
        </div>
      </Card>
    </div>
  );
};
export default MealItems;
