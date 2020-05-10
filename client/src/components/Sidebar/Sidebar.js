import React from "react";
import Button from "./../Button/Button"
import "./Sidebar.css";

const Sidebar = (props) => {
    return (
            <Button
                do = {() => props.setShowInputForm(!props.showInputForm)}
                name = "New Date"
            />
    );
}
export default Sidebar;