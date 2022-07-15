import './App.css';
import React from "react";
import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <h4>Aj-Notebook</h4>
    </>
  );
}

export default App;
