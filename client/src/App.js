import React, {useState} from 'react';
import Sidebar from "./components/Sidebar/Sidebar.js";
import Stage from "./components/Stage/Stage";
import DateForm from "./components/DateForm/DateForm";
import "./App.css"

const App = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [counterInfo, setCounterInfo] = useState(null);
  const [slide, setSlide] = useState("");
  const closeForm = () =>{
    setTimeout(() => {
      setShowInputForm(false);
    }, 1001);
  }
  return (
    <>
      <div className = "main">
        <Sidebar
        setShowInputForm = {setShowInputForm}
        showInputForm = {showInputForm}
        slide = {slide}
        setSlide = {setSlide}
        ></Sidebar>
        <Stage
        counterInfo = {counterInfo}
        ></Stage>
      </div>
      {showInputForm && 
      <DateForm
      setShowInputForm = {setShowInputForm}
      showForm = {showInputForm}
      closeForm = {closeForm}
      setCounterInfo = {setCounterInfo}
      slide = {slide}
      setSlide = {setSlide}
      ></DateForm>}
    </>
  );
}

export default App;
