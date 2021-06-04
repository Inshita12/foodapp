import React from 'react';

import './Input.css';
const input=React.forwardRef((props,ref)=>{
    return(
<div id="input"> 
    <label htmlFor={props.input.id} >{props.label}</label>
    <input ref={ref} {...props.input}/>
</div>);

});
export default input;