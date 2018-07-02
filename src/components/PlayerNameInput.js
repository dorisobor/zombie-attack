import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';






class PlayerName extends Component {

  
 state = {
   playerName: '',
   error: '',
 };

 // Sets playerName to the value entered by the user
 handleChange= event => {
   this.setState({ playerName: event.target.value });
 };

 /* On form submission, call handleLogin function (in 
 ** App.js) and set the state with the player's name.
 */
 submitName = event => {
   event.preventDefault();
   //Checking playerName is valid - if not,
   // display an error message to the player.
   if (this.state.playerName === '') {
     this.setState({ error: 'Please enter your name' });
   } else {
     this.props.handleLogin(this.state.playerName);
   }
 };

 render() {
   
   return (
     <div>
      
       <form onSubmit={this.submitName}>
          
          <input type="text" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange} />
       
        <button type="submit" value="Start">Start </button>
      </form>
      
     </div>
   );
 }
}


  export default PlayerName;