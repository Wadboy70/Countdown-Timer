import React, { useState, useEffect } from "react";
import Months from "./../assets/Months";
import "./Timer.css";
const getTime = (countdownTime) => {
    return Math.floor(countdownTime /1000)
}
const Timer = (props) => {
    const [currTime, setCurrTime] = useState(null);
    useEffect (() => {
        setInterval(() => {
            let timeLeft = (new Date(`${Months(props.counterInfo.year)[props.counterInfo.month-1].name} ${props.counterInfo.day} ${props.counterInfo.year} ${props.counterInfo.hour}:${props.counterInfo.minute}:${props.counterInfo.second}`).getTime()) - new Date().getTime();
            setCurrTime(getTime(timeLeft));
        },1000);
        return(clearInterval());
    }, [props, setCurrTime, getTime]);
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