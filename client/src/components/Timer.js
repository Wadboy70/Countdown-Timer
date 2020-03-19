import React from "react";
import "./Timer.css";

const getTime = (props) => {
    var rawDate = props.counterInfo.date;
    var year = rawDate.slice(0,4);
    var month = rawDate.slice(5,7);
    var day = rawDate.slice(8);
    return year +" "+ month + " " + day;

}
const Timer = (props) => {
    return(
        <>
            {props.counterInfo && <div>
                <h2>{props.counterInfo.name}</h2>
                <p>{getTime(props)}</p>
            </div>}
        </>
    );
}
export default Timer;