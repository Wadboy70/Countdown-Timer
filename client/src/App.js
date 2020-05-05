import React, { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar.js";
import Stage from "./components/Stage";
import DateForm from "./components/DateForm";

const getTimeNow = () => {
  var time = new Date();
  return{
      year: time.getFullYear(),
      month: time.getMonth()+1,
      day: time.getDate(),
      hour: time.getHours(),
      minute: time.getSeconds()
  };
}
const App = () => {
  const [showInputForm, setShowInputForm] = useState(false);
  const [counterInfo, setCounterInfo] = useState(undefined);
  const [timeNow, setTimeNow] = useState(undefined);

  useEffect(() => {
      setInterval(setTimeNow(getTimeNow()),1000)
  },[]);

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
      timeNow = {timeNow}
      setShowInputForm = {setShowInputForm}
      showForm = {showInputForm}
      setCounterInfo = {setCounterInfo}
      ></DateForm>}
    </>
  );
}

export default App;
