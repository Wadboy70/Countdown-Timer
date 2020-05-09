import React, { useState, useEffect } from "react";
import Months from "./../assets/Months";
import "./Timer.css";
const getCountdownTime = (date1, date2) => {
    const countdownTime = date1.getTime() - date2.getTime();
    let time = {}
    let totalSeconds = Math.floor(countdownTime/1000);
    let days = Math.floor(totalSeconds/60/60/24);
    let yearDiv = 0;
    time.years = 0;
    for (let year = date2.getFullYear(); year < date1.getFullYear() && days > 365; year++){
        let leapYear = year % 4 === 0 ? true : false;
        if(leapYear && 
            ((year === date2.getFullYear() && date2.getMonth() < 2) || 
            (year === date1.getFullYear() && date1.getMonth() > 2) || 
            (year !== date1.getFullYear() && 
            year !== date2.getFullYear()))){
            days--;
            yearDiv++;
        }
        days -= 365;
        time.years++;
        yearDiv += 365;
    }
    yearDiv /= time.years;
    time.days = days;
    time.hours = Math.floor(totalSeconds/60/60) - (time.days * 24) - Math.floor(time.years * yearDiv * 24);
    time.minutes = Math.floor(totalSeconds/60) - (time.hours * 60)- (time.days * 24 * 60)- Math.floor(time.years * yearDiv * 24 * 60);
    time.seconds = Math.floor(totalSeconds) - (time.minutes*60) - (time.hours * 60 * 60)- (time.days * 24 * 60 * 60)- Math.floor(time.years * yearDiv * 24 * 60 * 60);
    return time;
}
const Timer = (props) => {
    const [currTime, setCurrTime] = useState(null);

    //Decrease the count every second
    const useInterval = (callback) => {
        const savedCallback = React.useRef();
        useEffect(() => {
          savedCallback.current = callback;
        });
        useEffect(() => {
            const run = () => {
            savedCallback.current();
            }
            let interval = () => setInterval(run ,1000);
            interval();
            return clearInterval(interval);
        }, [])
    }
       
    useInterval(()=>{
        setCurrTime(getCountdownTime(new Date(`${Months(props.counterInfo.year)[props.counterInfo.month-1].name} ${props.counterInfo.day} ${props.counterInfo.year} ${props.counterInfo.hour}:${props.counterInfo.minute}:${props.counterInfo.second}`), new Date()));
    });
    return(
        <>
            {props.counterInfo && <div>
                <h2>{props.counterInfo.name}</h2>
                
            </div>}
            {
                currTime &&
                <div  className = "time">
                <p>{currTime.years} years</p>
                <p>{currTime.days} days</p>
                <p>{currTime.hours} hours</p>
                <p>{currTime.minutes} minutes</p>
                <p>{currTime.seconds} seconds</p>
                </div>
            }
        </>
    );
}
export default Timer;