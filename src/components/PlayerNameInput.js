import React, { Component } from "react";
import { withRouter } from 'react-router-dom';






class PlayerName extends Component {
    constructor(props) {
        super(props);
        this.state = {playerName: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.submitPlayerName = this.submitPlayerName.bind(this);
      }
    
      
      handleChange(event) {
        this.setState({playerName: event.target.value});
      }
    
      submitPlayerName(e) {
        e.preventDefault();
        if (this.state.playerName === '') {
         console.log( "error") ;
        } else {
     console.log("Hello player: " + this.state.playerName);
        this.props.history.push('/Game');
      }
      }
    
      render() {
        return (
          <form onSubmit={this.submitPlayerName}>
          
              <input type="text" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange} />
           
            <button type="submit" value="Start">Start </button>
          </form>
        );
      }
  }
  
  export default withRouter(PlayerName);