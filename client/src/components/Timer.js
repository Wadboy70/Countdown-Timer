import React from "react";
import "./Timer.css";

const getTime = (props) => {
    if(props.counterInfo)
        return props.counterInfo.name;

}
const Timer = (props) => {
    return(
        <div>
            <p>{getTime(props)}</p>
        </div>
    );
}
export default Timer;