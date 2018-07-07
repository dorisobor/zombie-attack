import React, { Component } from "react";
import { Button } from 'reactstrap';


class PlayerName extends Component {

  // set the two states the players name and the error message
  state = {
    playerName: '',
    error: '',
  };

  // get the value from the input
  handleChange = event => {
    this.setState({ playerName: event.target.value });
  };


  submitName = event => {
    event.preventDefault();

    if (this.state.playerName === '') {
      this.setState({ error: "Please enter your name" });
    } else {
      this.props.handleLogin(this.state.playerName);
    }
  };

  render() {
    //if its in an error state then display the error message
    // make the errorMessage variable empty so it can change to the message 
    let errorMessage = null;
    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>;
    }
    return (

      //the form

      <div class="player-form">

        <form onSubmit={this.submitName}>
        <div class="form-group">
        <label for="enterPlayerName">Player name</label>

          <input type="text"  class="form-control" id="enterPlayerName"
          placeholder="Enter your name" value={this.state.value} onChange={this.handleChange} />

          <Button type="submit" value="Start">Start </Button>
          </div>
        </form>
        {errorMessage}

      </div>
    );
  }
}


export default PlayerName;