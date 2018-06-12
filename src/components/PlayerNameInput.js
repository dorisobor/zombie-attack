import React, { Component } from "react";
import { withRouter } from 'react-router-dom';






class PlayerName extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert("Hello player: " + this.state.value);
        event.preventDefault();
        this.props.history.push('/Game');

      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          
              <input type="text" placeholder="Enter your name" value={this.state.value} onChange={this.handleChange} />
           
            <button type="submit" value="Start">Start </button>
          </form>
        );
      }
  }
  
  export default withRouter(PlayerName);