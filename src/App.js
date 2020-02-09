import React from 'react';
import './App.css';
import Pre from './Pre';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Pre />
    <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
        </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
