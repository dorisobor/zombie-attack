import React, { Component } from "react";
import zombieWalking from "./../images/zombie-walking.gif";

class Counter extends Component {

    // the counter will start at zero in the first state
    state = {
        counter: 0,
        water:15,
      }

    // function for the counter everytime you click it will add 1
    counterClick = () => {
        this.setState({ counter: this.state.counter + 1});
        }

     waterCounterClick = () => {
       if (this.state.counter - this.state.water >= 0){
      this.setState({ counter: this.state.counter - this.state.water});
    }
    }
      render () {
        return(
        <div>
          <p>${this.state.counter}</p>
          <button onClick={this.waterCounterClick}>x</button>
        <div className="zombie-walking">
        <img src={zombieWalking} alt="walking-zombie" onClick={this.counterClick}/>
        </div>
        </div>
        )
      }
    
    
}


export default Counter;