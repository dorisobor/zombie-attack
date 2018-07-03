import React, { Component } from "react";
import zombieWalking from "./../images/zombie-walking.gif";
import strenghtBoostBottle from "./../images/water.png";


class Counter extends Component {

    // the counter will start at zero in the first state
    state = {
        moneyScore: 0,
        counter: 1,
        strenghtBoostPrice: 15,
        //click:1,
      }

    // function for the counter everytime you click it will add 1
    counterClick = () => {
        this.setState({moneyScore: this.state.moneyScore + this.state.counter});
        }

     strenghtBoostCounterClick = () => {
       if (this.state.moneyScore - this.state.strenghtBoostPrice >= 0){
          this.setState({ 
            moneyScore: this.state.moneyScore - this.state.strenghtBoostPrice,
            counter: this.state.counter + 1
            //strenghtBoostPrice: Math.round(this.state.strenghtBoostPrice * 1.1) 
          });

    }
    }
      render () {
        return(
        <div>
          <p>${this.state.moneyScore}</p>
          <img src={strenghtBoostBottle} alt="strenght-boost-bottle" onClick={this.strenghtBoostCounterClick}/>
        <div className="zombie-walking">
        <img src={zombieWalking} alt="walking-zombie" onClick={this.counterClick}/>
        </div>
        </div>
        )
      }
    
    
}


export default Counter;