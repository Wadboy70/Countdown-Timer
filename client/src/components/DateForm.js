import React, { useState } from 'react';
import './DateForm.css';
import Months from './../assets/Months.js';

var setOption = (max, toPush) => {
    var arr = [];
    for(var i = 0; i < max; i++){
        arr.push(toPush + i);
    }
    return arr.map((elem, i) =>  elem = <option key = {i}>{elem}</option>);
}

const DateForm = (props) => {
    const [warning, setWarning] = useState("");
    const [refresh, setRefresh] = useState(0);
    const [nameRefresh, setNameRefresh] = useState(0);
    //will be submitted with form
    const [dateInfo, setDateInfo] = useState({
        name: null,
        year: 2020,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0
    });
    const warningMessage = () => {
        var now = new Date().getTime();
        var future = new Date(`${Months(dateInfo.year)[dateInfo.month-1].name} ${dateInfo.day} ${dateInfo.year} ${dateInfo.hour}:${dateInfo.minute}:${dateInfo.second}`).getTime();
        if (now > future){
            setWarning("Invalid Date, must be in the future");
            return;
        }
        submitDate(dateInfo);
    }
    const inputChange = (e, value) => {
        var temp = dateInfo;
        temp[value] = Number(e.target.value);
        setDateInfo(temp);
        if(value === "year" || value === "month") setRefresh(refresh+1);
    }
    const submitDate = () =>{
        if(!dateInfo.name) setWarning("Please give this countdown a name!");
        else if (warning === ""){
            props.setCounterInfo(dateInfo); //passes date info to be used in countdown            
            props.setShowInputForm(false);
            setNameRefresh(nameRefresh+1);
            setDateInfo(null);
        }
    }
    //Year Array
    const years = setOption(50, new Date().getFullYear())
    //month Array
    const months = Months(dateInfo.year).map((month,index) => {
        return <option value = {index+1} key = {index}> {month.name} </option>;
    });
    const days = setOption(Months(dateInfo.year)[dateInfo.month-1].length,1)
    //minute Array
    const hours = setOption(24,0);
    const minutes = setOption(60,0);
    const seconds = setOption(60,0);
    return(
        <>
            <h2>new countdown</h2>
            <form> 
                <input
                key = {() => nameRefresh}
                defaultValue = ""
                type = "text"
                placeholder = "Name" 
                onChange = {e => dateInfo.name = e.target.value}/>

                <select onChange = {(e) => inputChange(e,"year")}
                value = {dateInfo.year}>
                    {years}
                </select>
                <select onChange = {(e) => inputChange(e,"month")}>
                    {months}
                </select>
                <select onChange = {(e) => inputChange(e,"day")}
                    key = {refresh}>
                    {days}
                </select>
                <select onChange = {(e) => inputChange(e,"hour")}>
                    {hours}
                </select>
                <select onChange = {(e) => inputChange(e,"minute")}>
                    {minutes}
                </select>
                <select onChange = {(e) => inputChange(e,"second")}>
                    {seconds}
                </select>

                <button 
                type = "submit" 
                onClick = {(e) => {
                        setWarning("");
                        e.preventDefault();
                        warningMessage();
                    }
                }>
                Submit</button>

                {warning && <p>{warning}</p>}
            </form>
        </>
    );
}

export default DateForm;