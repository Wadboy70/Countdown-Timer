import React, { useState } from 'react';
import logo from './logo.svg';
import Sidebar from "./components/Sidebar.js";
import Stage from "./components/Stage";
import DateForm from "./components/DateForm";

const App = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [counterInfo, setCounterInfo] = useState(undefined);
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
      showForm = {showInputForm}
      setCounterInfo = {setCounterInfo}
      ></DateForm>}
    </>
  );
}

export default App;
