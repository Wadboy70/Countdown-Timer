import React, { useState, useEffect } from 'react';
import './DateForm.css';

var refresh = (showForm) =>{
    return showForm ? "reset" : "";
}

var getTodayDate = () => {
    var today = new Date();
    var minDay = String(today.getDate()).padStart(2, '0');
    var minMonth = String(today.getMonth() + 1).padStart(2, '0');
    var minYear = today.getFullYear();
    return (minYear + "-" + minMonth + "-" + minDay);
}

const submitDate = (props, dateInfo) =>{
    props.setCounterInfo(dateInfo); //passes date info to be used in countdown
    props.setShowInputForm(false);
    refresh(props.showForm);
    console.log(dateInfo);
}

const warningMessage = (dateInfo) => {
}
const DateForm = (props) => {
    //will be submitted with form
    const dateInfo = {
        name: "",
        date: {
            year: 2020,
            month: 1,
            day: 1
        }
    }

    //Year Array
    var arr = [];
    for(var i = 0; i < 50; i++){
        arr.push(new Date().getFullYear() + i);
    }
    const years = arr.map(year =>  year = <option>{year}</option>);

    //month Array
    const months =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map((month,index) => {
        return <option value = {index+1}> {month} </option>;
    });

    arr = [];
    for (var i = 0; i < 31; i++){
        arr.push(i+1);
    }

    //day Array
    const days = arr.map(day => day = <option value = {day}>{day}</option> );

    var shouldWarn = false;
    var warningMessage = "";
    return(
        <>
            <h2>new countdown</h2>
            <form 
            type = {refresh(props.showForm)}> 
                <input 
                required
                type = "text"
                placeholder = "Name" 
                onChange = {e => dateInfo.name = e.target.value}/>

                <select onChange = {e => dateInfo.year = e.target.value}>
                    {years}
                </select>

                <select onChange = {e => dateInfo.month = e.target.value}>
                    {months}
                </select>
                    
                <select onChange = {e => dateInfo.day = e.target.value}>
                    {days}
                </select>

                <button 
                type = "submit" 
                onClick = {(e) => {
                        e.preventDefault();
                        submitDate(props, dateInfo, shouldWarn, warningMessage);
                    }
                }>
                Submit</button>

                {shouldWarn && <p>{warningMessage(shouldWarn)}</p>}
            </form>
        </>
    );
}

export default DateForm;