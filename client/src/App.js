import React, { useState } from 'react';
import logo from './logo.svg';
import Sidebar from "./components/Sidebar.js";
import Stage from "./components/Stage";

const [showInputForm, setShowInputForm] = useState(false);
const App = () => {
  return (
    <>
      <Sidebar
      setShowInputForm = {setShowInputForm}
      showInputForm = {showInputForm}
      ></Sidebar>
      <Stage></Stage>
    </>
  );
}

export default App;
