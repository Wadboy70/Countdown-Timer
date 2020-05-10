import React, {useState} from 'react';
import Sidebar from "./components/Sidebar/Sidebar.js";
import Stage from "./components/Stage/Stage";
import DateForm from "./components/DateForm/DateForm";
import "./App.css"

const App = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [counterInfo, setCounterInfo] = useState(undefined);
  return (
    <>
      <div className = "main">
        <Sidebar
        setShowInputForm = {setShowInputForm}
        showInputForm = {showInputForm}
        ></Sidebar>
        <Stage
        counterInfo = {counterInfo}
        ></Stage>
      </div>
      {showInputForm && 
      <DateForm
      setShowInputForm = {setShowInputForm}
      showForm = {showInputForm}
      setCounterInfo = {setCounterInfo}
      ></DateForm>}
    </>
  );
}

export default App;
