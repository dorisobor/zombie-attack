import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../css/App.css";
import Home from "./Home";
import Game from "./Game";



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