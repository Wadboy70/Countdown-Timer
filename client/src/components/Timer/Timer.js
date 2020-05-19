import React, { useState, useEffect } from "react";
import Months from "../../assets/Months";
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
    yearDiv = (yearDiv / time.years) || 0;
    time.days = days;
    time.hours = Math.floor(totalSeconds/60/60) - (time.days * 24) - Math.floor(time.years * yearDiv * 24);
    time.minutes = Math.floor(totalSeconds/60) - (time.hours * 60)- (time.days * 24 * 60)- Math.floor(time.years * yearDiv * 24 * 60);
    time.seconds = Math.floor(totalSeconds) - (time.minutes*60) - (time.hours * 60 * 60)- (time.days * 24 * 60 * 60)- Math.floor(time.years * yearDiv * 24 * 60 * 60);
    return time;
}
const Timer = ({
    counterInfo
}) => {
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
        setCurrTime(getCountdownTime(new Date(`${Months(counterInfo.year)[counterInfo.month-1].name} ${counterInfo.day} ${counterInfo.year} ${counterInfo.hour}:${counterInfo.minute}:${counterInfo.second}`), new Date()));
    });
    return(
        <div className = "timer">
            {counterInfo && <div>
                <h2>{counterInfo.name}</h2>
                
            </div>}
            {
                currTime &&
                <>
                    <div  className = "time">
                        <p>{currTime.years} years</p>
                        <p>{currTime.days} days</p>
                        <p>{currTime.hours} hours</p>
                        <p>{currTime.minutes} minutes</p>
                        <p>{currTime.seconds} seconds</p>
                    </div>
                    <div>
                        <p>until {`${counterInfo.day} ${Months(counterInfo.year)[counterInfo.month-1].name} ${counterInfo.year}`}</p>
                    </div>
                </>
            }
        </div>
    );
}
export default Timer;