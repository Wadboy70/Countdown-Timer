import React, { useState } from 'react';
import logo from './logo.svg';
import Sidebar from "./components/Sidebar.js";
import Stage from "./components/Stage";
import DateForm from "./components/DateForm";

const App = () => {
const [showInputForm, setShowInputForm] = useState(false);
  return (
    <>
      {showInputForm && <DateForm showForm = {showInputForm}></DateForm>}
      <Sidebar
      setShowInputForm = {setShowInputForm}
      showInputForm = {showInputForm}
      ></Sidebar>
      <Stage></Stage>
    </>
  );
}

export default App;
