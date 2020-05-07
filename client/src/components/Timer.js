import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = (props) => {
    const [currTime, setCurrTime] = useState(null);
    // useEffect (() => {
    //     setInterval(() => setCurrTime(props.timeNow().minute), 1000);
    //     document.title = "currTime";
    //     console.log(currTime);
    //     return(clearInterval());
    // }, props);
    return(
        <>
            {props.counterInfo && <div>
                <h2>{props.counterInfo.name}</h2>
                
            </div>}
            {
                currTime &&
                <p>{currTime}</p>
            }
        </>
    );
}
export default Timer;