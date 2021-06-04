
import React, {useState}from 'react';
import Header from './Components/Header/Header';
import Meal from './Components/Meal/Meal';
import CartItem from './Cart/CartItem';
import ContextProvider from './assets/StoreItems/ContextProvider';


function App() {
  const[cartIsShown , setcartIsShown]=useState(false);


const CartShownHandler=()=>{
setcartIsShown(true);
}
const HideCartHandler=()=>{
  setcartIsShown(false);
  }
  return (
    <ContextProvider>
   {cartIsShown && <CartItem onClose={HideCartHandler}/>}
     <Header  onCartShown={CartShownHandler}/> 
      
     <main>
     <Meal>
     </Meal>
     </main>
     </ContextProvider>
  );
}

export default App;
