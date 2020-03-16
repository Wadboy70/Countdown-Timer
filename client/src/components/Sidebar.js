import React from "react";
import "./Sidebar.css";
import DateForm from './DateForm';

const Sidebar = (props) => {
    return (
        <>
            <button
            onClick = {() => props.setShowInputForm(!props.showInputForm)} //toggle form showing
            >New Date</button>
        </>
    );
}
export default Sidebar;