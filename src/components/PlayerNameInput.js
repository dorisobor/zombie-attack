import React, { Component } from "react";
// import { withRouter } from 'react-router-dom';






class PlayerName extends Component {

  // set the two states
 state = {
   playerName: '',
   error: '',
 };

 handleChange= event => {
   this.setState({ playerName: event.target.value });
 };


 submitName = event => {
   event.preventDefault();
   
   if (this.state.playerName === '') {
     this.setState({ error: 'Please enter your name' });
   } else {
     this.props.handleLogin(this.state.playerName);
   }
 };

 // the form
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