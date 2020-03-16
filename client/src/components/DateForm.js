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
const DateForm = (props) => {
   
    return(
        <form type = {refresh(props.showForm)}>
            <input type = "text" placeholder = "Name"/>
            <input type="date" min={getTodayDate()}></input>
        </form>
    );
}

export default DateForm;