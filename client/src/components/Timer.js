import React, { useState, useEffect } from "react";
import "./Timer.css";

const getTime = (props) => {
    const targetDate = {};
    var rawDate = props.counterInfo.date;
    targetDate.year = rawDate.slice(0,4);
    targetDate.month = rawDate.slice(5,7);
    targetDate.day = rawDate.slice(8);


}
const Timer = (props) => {
    const [currTime, setCurrTime] = useState(undefined);

    useEffect (() => {
        setInterval(() => setCurrTime(new Date().getSeconds()), 1000);
        document.title = currTime;
        return(clearInterval());
    });
    return(
        <>
            {props.counterInfo && <div>
                <h2>{props.counterInfo.name}</h2>
                
            </div>}
            <p>{currTime}</p>
        </>
    );
}
export default Timer;