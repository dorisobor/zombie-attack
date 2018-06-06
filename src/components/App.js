import React, { Component } from "react";
import "./../css/App.css";
import Home from "./Home";
import Game from "./Game";
//import all the from react-router-dom
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App"> 
      
       <Switch>
         <Route exact path ="/" component={Home}  /> 
         <Route exact path ="/Game" component={Game}  /> 

         </Switch>

      </div>
      </Router>

      

    );
  }
}

export default App;
