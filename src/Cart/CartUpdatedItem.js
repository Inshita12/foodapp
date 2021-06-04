import './CartUpdatedItem.css';

const CartItem = (props) => {
  const price = `Rs.${props.price.toFixed(2)}`;

  return (
    <li id='cartupdated-item'>
      <div>
        <h2>{props.name}</h2>
        <div id='cartsummary'>
          <span id="price">{price}</span>
          <span id="amount">x {props.amount}</span>
        </div>
      </div>
      <div id="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
