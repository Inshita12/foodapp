import {Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const Backdrop =props=>{
    return (
<div id="backdrop" />

    );
}
const Overlay =props=>{
    return (
<div id="modal">
    <div id="content-container">{props.children}</div>
</div>

    );
}
const portal=document.getElementById("overlay");
const Modal=props=>{
    return(
        <Fragment>

{ReactDOM.createPortal(<Backdrop/>,portal)}
{ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portal)}
        </Fragment>
        
       
    );
}
export default Modal;