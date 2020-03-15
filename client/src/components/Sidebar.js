import React from "react";
import "./Sidebar.css";
import DateForm from './DateForm';

const Sidebar = (props) => {
    return (
        <>
            <button
            onClick = {() => props.setShowInputForm(!showInputForm)} //toggle form showing
            ></button>
            {props.showForm && <DateForm showForm = {props.showForm}></DateForm>}
            {/* If form is now showing, pass showForm props to form so that it can be cleared */}
        </>
    );
}
export default Sidebar;