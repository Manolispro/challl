import React from 'react';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";

import './App.css';
function App() {
  
  return (
    <Router>
      
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <Route exact path = "/registerd" component = {Navbar}/>
      
    </Router>
  );
}

export default App;
