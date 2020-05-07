import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar.js";
import Stage from "./components/Stage";
import DateForm from "./components/DateForm";


const App = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [counterInfo, setCounterInfo] = useState(undefined);
  const [timeNow, setTimeNow] = useState(undefined);

  return (
    <>
      <Sidebar
      setShowInputForm = {setShowInputForm}
      showInputForm = {showInputForm}
      ></Sidebar>
      <Stage
      counterInfo = {counterInfo}
      ></Stage>
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
