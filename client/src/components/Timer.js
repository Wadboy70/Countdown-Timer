import React, { useState, useEffect } from "react";
import Months from "./../assets/Months";
import "./Timer.css";
const getTime = (countdownTime) => {
    // let days = Math.floor(countdownTime / 1000 / 60 / 60 / 24);
    return Math.floor(countdownTime /1000);
}
const Timer = (props) => {
    const [currTime, setCurrTime] = useState(null);
    
    // useEffect (() => {
    //     let interval = () => setInterval(() => {
    //         let timeLeft = (new Date(`${Months(props.counterInfo.year)[props.counterInfo.month-1].name} ${props.counterInfo.day} ${props.counterInfo.year} ${props.counterInfo.hour}:${props.counterInfo.minute}:${props.counterInfo.second}`).getTime()) - new Date().getTime();
    //         setCurrTime(getTime(timeLeft));
    //     },10);
    //     interval();
    //     return(clearInterval(interval));
    // }, [props, setCurrTime]);

    function useInterval(callback) {
        const savedCallback = React.useRef();
        useEffect(() => {
          savedCallback.current = callback;
        });
       
       
        useEffect(() => {
            console.log("arrived");
            const run = () => {
            savedCallback.current();
            }
            let interval = () => setInterval(run ,1000);
            interval();
            return clearInterval(interval);
        }, [])
    }
       
    useInterval(()=>{
        setCurrTime(new Date(`${Months(props.counterInfo.year)[props.counterInfo.month-1].name} ${props.counterInfo.day} ${props.counterInfo.year} ${props.counterInfo.hour}:${props.counterInfo.minute}:${props.counterInfo.second}`).getTime() - new Date().getTime());
    });
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