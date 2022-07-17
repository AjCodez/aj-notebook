import './App.css';
import React from "react";
import { Navbar } from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './components/home';
import { About } from './components/about';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>

      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
