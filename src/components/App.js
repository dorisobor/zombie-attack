import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../css/App.css";
import Home from "./Home";
import Game from "./Game";



class App extends Component {

// if the user has entered their name they will be redirected to the game page
//the state will change depending on if the user is "logged in" or not
  state = {
    loggedIn: false,
    playerName: '',
   
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