import React, { useState, useEffect } from 'react';
import './DateForm.css';
import Months from './../assets/Months.js';

var getTodayDate = () => {
    var today = new Date();
    var minDay = String(today.getDate()).padStart(2, '0');
    var minMonth = String(today.getMonth() + 1).padStart(2, '0');
    var minYear = today.getFullYear();
    return (minYear + "-" + minMonth + "-" + minDay);
}

const DateForm = (props) => {
    const [warning, setWarning] = useState("");
    //will be submitted with form
    const [dateInfo, setDateInfo] = useState({
        name: "",
        date: {
            year: 2020,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0
        }
    });
    const warningMessage = () => {
        var leap = ((dateInfo.date.year % 4 == 0) && dateInfo.date.month == 2 && dateInfo.date.day > 29) ? true : false;
        console.log(leap);
        //if date is larger than possible && leap year edge case
        if( leap || ((dateInfo.date.day > Months[dateInfo.date.month-1].length) && 
        (dateInfo.date.year % 4 != 0 && dateInfo.date.month != 2 && dateInfo.date.day != 29))){
            setWarning("Invalid Date");
            console.log(warning);
            return;
        }
        var now = props.timeNow;
        var future = dateInfo.date;
        console.log(now);
        console.log(future);
        if ((future.year < now.year) || 
        ((future.year == now.year) && (future.month < now.month)  ||
        ((future.month == now.month) && (future.day < now.day) ||
        ((future.day == now.day) && (future.hour < now.hour) ||
        ((future.hour == now.hour) && (future.minute < now.minute) ||
        ((future.minute == now.minute) && (future.second < now.second))))))){
            setWarning("Invalid Date, must be in the future");
            console.log(warning);
        }
    }
    const submitDate = (props, dateInfo) =>{
        props.setCounterInfo(dateInfo); //passes date info to be used in countdown
    }
    //Year Array
    var arr = [];
    for(var i = 0; i < 50; i++){
        arr.push(new Date().getFullYear() + i);
    }
    const years = arr.map((year, i) =>  year = <option key = {i}>{year}</option>);

    //month Array
    const months = Months.map((month,index) => {
        return <option value = {index+1} key = {index}> {month.name} </option>;
    });

    arr = [];
    for (var i = 0; i < 31; i++){
        arr.push(i+1);
    }

    //day Array
    const days = arr.map((day, index) => day = <option value = {day} key = {index}>{day}</option> );
    
    return(
        <>
            <h2>new countdown</h2>
            <form> 
                <input 
                required
                type = "text"
                placeholder = "Name" 
                onChange = {e => dateInfo.name = e.target.value}/>

                <select onChange = {e => {
                    var temp = dateInfo;
                    temp.date.year = Number(e.target.value);
                    setDateInfo(temp);
                    }}>
                    {years}
                </select>
                <select onChange = {e => {
                    var temp = dateInfo;
                    temp.date.month = Number(e.target.value);
                    setDateInfo(temp);
                    }}>
                    {months}
                </select>
                <select onChange = {e => {
                    var temp = dateInfo;
                    temp.date.day = Number(e.target.value);
                    setDateInfo(temp);
                    }}>
                    {days}
                </select>

                <button 
                type = "submit" 
                onClick = {(e) => {
                        e.preventDefault();
                        warningMessage();
                        submitDate(props, dateInfo);
                    }
                }>
                Submit</button>

                {warning && <p>{warning}</p>}
            </form>
        </>
    );
}

export default DateForm;