import React from 'react';
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
const DateForm = (props) => {
    const dateInfo = {
        name: "",
        date: ""
    }
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
                
                <input 
                required
                type="date" 
                min={getTodayDate()} 
                onChange = {e => dateInfo.date = e.target.value}/>

                <button 
                type = "submit" 
                onClick = {(e) => {
                        e.preventDefault();
                        submitDate(props, dateInfo);
                    }
                }>
                Submit</button>
            </form>
        </>
    );
}

export default DateForm;