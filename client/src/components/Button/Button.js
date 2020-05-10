import React from 'react';
import "./Button.css";

const Button = (props) =>{
    return(
        <button 
        onClick = {props.do} 
        className = "buttonStyle">
            {props.name}
        </button>
    );
}

export default Button;