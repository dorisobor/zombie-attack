import React, { Component } from 'react';
import zombieWalking from "./../images/zombie-walking.gif";


class Counter extends Component {

    // the counter will start at zero in the first state
    state = {
        counter: 0
      }

    // function for the counter everytime you click it will add 1
    counterClick = () => {
        this.setState({ counter: this.state.counter + 1});
        
      }
      render () {
        return(
        <div>
          <p>${this.state.counter}</p>
        <div className="zombie-walking">
        <img src={zombieWalking} alt="walking-zombie" onClick={this.counterClick}/>
        </div>
          {/* <button onClick={this.counterClick}>+</button> */}
        </div>
        )
      }
    
    
}


export default Counter;