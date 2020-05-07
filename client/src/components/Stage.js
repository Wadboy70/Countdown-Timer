import React from "react";
import "./Stage.css";
import Timer from "./Timer.js";
const Stage = (props) =>{

    return(
        <div className = "stage">
            <h1>Countdown!</h1>
            {
                props.counterInfo &&
                <Timer {...props}></Timer>
            }
        </div>
    );
}
export default Stage;