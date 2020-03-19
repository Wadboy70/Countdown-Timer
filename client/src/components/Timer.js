import React from "react";
import "./Timer.css";

const getTime = (c, props) => {
    if (c){
        c.textContent = props.counterInfo;
    }

}
const Timer = (props) => {
    return(
        <div>
            <p ref = {(c, props) => getTime}></p>
        </div>
    );
}
export default Timer;