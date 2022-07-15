import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './components/navbar';

function App() {
  return (
    <>
    <Navbar/>
      <h4>Aj-Notebook</h4>
    </>
  );
}

export default App;
