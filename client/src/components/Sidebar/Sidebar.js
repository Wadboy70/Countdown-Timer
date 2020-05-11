import React from "react";
import Button from "./../Button/Button"
import "./Sidebar.css";

const Sidebar = (props) => {
    return (
            <div className = "sidebar">
                <Button
                    do = {() => {
                        props.setShowInputForm(!props.showInputForm);
                        props.setSlide("slideIn");
                    }}
                    name = "New Date"
                    color = "green"
                />
            </div>
    );
}
export default Sidebar;