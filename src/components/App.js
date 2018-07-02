import React, { Component } from "react";
import "./../css/App.css";
import Home from "./Home";
import DisplayPlayerName from "./DisplayPlayerName";
// import Game from "./Game";
//import all the from react-router-dom
// import {BrowserRouter as Router , Switch, Route} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: '',
      loggedIn: false, //=========== CHANGE THIS TO FALSE BEFORE DEPLOY!=============//
    };

    /* Binding to the handleLogin function in order to set 
    ** the state when a user logs in.
    */
    this.handleLogin = this.handleLogin.bind(this);
  }

  // state = {
	//   loggedIn: false,
  //   playerName: '',
  //   error: '',


  // }
  handleLogin = (playerName) => {
    this.setState({ loggedIn: true, playerName: playerName});
  }
  render() {
  	if(this.state.loggedIn) {
      return (

   <DisplayPlayerName playerName={this.state.playerName} />
    
   );
    }
    return (
      // <Router>
      <div className="App"> 
      <Home/>
       {/* <Switch>
         <Route exact path ="/" component={Home}  /> 
         <Route exact path ="/Game" component={Game}  /> 

         </Switch> */}

      </div>
      // </Router>

      

    );
  }
}

export default App;
