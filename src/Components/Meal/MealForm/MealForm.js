import React ,{useRef,useState} from 'react';
import './MealForm.css'
import Input from './Input';
const MealForm=props=>{ 
   const[amountisValid ,setamountisValid] =useState(true);
const amountInputRef= useRef()

const submitHandler=event=>{
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value; //holds a cureent value as the value is always a string
    const enteredAmountNumber=+enteredAmount;  //convert string into number

    if(enteredAmount.trim().length===0||
    enteredAmountNumber<1||
    enteredAmountNumber>10
    ){
        setamountisValid(false);
        return;
    }


props.onAddtoCart(enteredAmountNumber);
};

    return(
     <form id="form" onSubmit={submitHandler}>
         <Input 
         ref={amountInputRef}
        label="Amount"
         input={{
             id:'amount'+props.id,
             type:'number',
             min:'1',
             max:'10',
             step:1,
             defaultValue:'1'}
         }
         
         />
         <button>+Add</button>
         {!amountisValid&&<p>Limit cannot exceed upto 10</p>}
     </form>
    );
}
export default MealForm;