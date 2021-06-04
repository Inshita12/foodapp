import  { useReducer } from "react";
import CartContext from "./CartContext";
const defaultcartitems = {
  items: [],
  TotalAmount: 0,
};
const cartAction = (currentstate, action) => {
  if (action.type === "ADD_ITEM") {
    
    const newTotalAmount =
      currentstate.TotalAmount + action.item.price * action.item.amount;
      const ExistingItemIndexinCart=currentstate.items.findIndex(
        item=>item.id===action.item.id
        );
const ExistingIteminCart=currentstate.items[ExistingItemIndexinCart];

let newItems;

if(ExistingIteminCart){
   const newItem={
    ...ExistingIteminCart,
    amount: ExistingIteminCart.amount+action.item.amount
  };
  newItems=[...currentstate.items];
  newItems[ExistingItemIndexinCart]=newItem;
}
else{
  newItems = currentstate.items.concat(action.item);
}

      
      return {
      items: newItems,
      TotalAmount: newTotalAmount, 
    };
  }

  // for remove one item from added items in cart
  if(action.type==='REMOVE_ITEM'){
    const ExistingItemIndexinCart=currentstate.items.findIndex(
      item=>item.id===action.id
      );
      const ExistingIteminCart=currentstate.items[ExistingItemIndexinCart];
      const newTotalAmount=currentstate.TotalAmount-ExistingIteminCart.price;
      let newItems;
    if(ExistingIteminCart.amount===1){
     newItems=currentstate.items.filter(item=> item.id!==action.id);        //filter is bultin function that returns a new array buily by applying specific conditions
  }
  else{
   const newItem={...ExistingIteminCart,amount:ExistingIteminCart.amount-1};
  newItems=[...currentstate.items];
  newItems[ExistingIteminCart]=newItem;

  }
  return{
    items:newItems,
    TotalAmount:newTotalAmount
  }
}
  return defaultcartitems;
};
const ContextProvider = (props) => {
  const [cartState, setIsCartState] = useReducer(cartAction, defaultcartitems);
  const additemHandler = (item) => {
    setIsCartState({ type: "ADD_ITEM", item: item });
  };

  const removeitemHandler = (id) => {
    setIsCartState({ type: "REMOVE_ITEM", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    TotalAmount: cartState.TotalAmount,
    additem: additemHandler,
    removeitem: removeitemHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
