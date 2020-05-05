import React from "react";
import "./Timer.css";

const Timer = (props) => {
    /*useEffect (() => {
        setInterval(() => setCurrTime(new Date().getSeconds()), 1000);
        document.title = currTime;
        return(clearInterval());
    }, props);*/
    return(
        <>
            {props.counterInfo && <div>
                <h2>{props.counterInfo.name}</h2>
                
            </div>}
            <p>{}</p>
        </>
    );
}
export default Timer;