import React from "react";
import './App.css';
import Nav from './containers/Nav';
import Search from './components/Search';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
         <Nav/>
         <Switch>
         <Route path="/"  exact component={Home}/>
           <Route path="/home"  component={Home}/>
           <Route path="/search"  component={Search}/>

         </Switch>
    </div>
    </Router>
  );
}

export default App;
