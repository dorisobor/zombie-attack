import React, { Component } from "react";
import zombieWalking from "./../images/zombie-walking.gif";
import strenghtBoostBottle from "./../images/water.png";


class Counter extends Component {

    // the money score will start at zero in the first state
    //the counter will add 1 after each click
    //every item has a price value that increases the current state money score
    state = {
        moneyScore: 0,
        counter: 1,
        strenghtBoostPrice: 15,
        //click:1,
      }

    // function for the money score everytime you click it will add 1
    counterClick = () => {
        this.setState({moneyScore: this.state.moneyScore + this.state.counter});
        }
    // everytime you buy an upgrade the price and the clicks/hits will increase
     strenghtBoostCounterClick = () => {
       if (this.state.moneyScore - this.state.strenghtBoostPrice >= 0){
          this.setState({ 
            moneyScore: this.state.moneyScore - this.state.strenghtBoostPrice,
            counter: this.state.counter + 1,
            strenghtBoostPrice:  this.state.strenghtBoostPrice * 2 
          });

    }
    }
      render () {
        return(
        <div>
          <p>${this.state.moneyScore}</p>
          <div className="uppgrade-list">
          <div className="strenght-boost">

          <img src={strenghtBoostBottle} alt="strenght-boost-bottle" onClick={this.strenghtBoostCounterClick}/>
          <p>${this.state.strenghtBoostPrice}</p>
          </div>
          </div>
          <p>{this.state.counter}hits</p>
        <div className="zombie-walking">
        
        <img src={zombieWalking} alt="walking-zombie" onClick={this.counterClick}/>
        </div>
        </div>
        )
      }
    
    
}


export default Counter;