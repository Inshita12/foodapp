import React, { useContext } from "react";
import Modal from "../Components/UI/Modal";
import "./CartItem.css";
import CartContext from "../assets/StoreItems/CartContext";
import CartUpdatedItem from "./CartUpdatedItem";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const TotalAmount = `Rs.${cartCtx.TotalAmount.toFixed(2)}`;
  const hasitem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeitem(id);

  };
  const cartItemAddHandler = (item) => {
    cartCtx.additem({...item,amount:1})
  };
  const cartItems = (
    <ul id="cart-items">
      {cartCtx.items.map((item) => (
        <CartUpdatedItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal >
      {cartItems}
      <div id="total">
        <span>Total Amount</span>
        <span>{TotalAmount} </span>
      </div>
      <div id="actions">
        <button onClick={props.onClose}>Close</button>
        {hasitem && <button>Order</button>}
      </div>
    </Modal>
  );
};
export default CartItem;
