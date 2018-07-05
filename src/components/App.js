import React, { Component } from "react";
import "./../css/App.css";
import Home from "./Home";
//import DisplayPlayerName from "./DisplayPlayerName";
import Game from "./Game";
//import PlayerName from "./PlayerNameInput";
//import all the from react-router-dom
// import {BrowserRouter as Router , Switch, Route} from "react-router-dom";



class App extends Component {


  state = {
    loggedIn: false,
    playerName: '',
    error: '',
  }

  handleLogin = (playerName) => {
    this.setState({ loggedIn: true, playerName: playerName });
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <Game playerName={this.state.playerName} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Home handleLogin={this.handleLogin} />
        </div>
      );
    }
  }
}

export default App;