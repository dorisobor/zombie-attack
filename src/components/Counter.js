import React, { Component } from "react";
import zombieWalking from "./../images/zombie-walking.gif";
import strenghtBoostBottle from "./../images/water.png";
import slingshot from "./../images/slingshot.png";
import baseballBat from "./../images/baseball-bat.png";
import spikedBaseballBat from "./../images/spiked-baseball-bat.png";
import bomb from "./../images/bomb.png";





class Counter extends Component {

  // the money score will start at zero in the first state
  //the counter will add 1 after each click
  //every item has a price value that increases the current state money score
  state = {
    moneyScore: 0,
    counter: 1,
    strenghtBoostPrice: 2,
    slingshotPrice: 5,
    baseballBatPrice: 10,
    spikedBatPrice: 20,
    bombPrice: 30,

    //click:1,
  }

  // function for the money score everytime you click it will add 1
  counterClick = () => {
    this.setState({ moneyScore: this.state.moneyScore + this.state.counter });
  }
  // everytime you buy an upgrade the price and the clicks/hits will increase
  strenghtBoostCounterClick = () => {
    if (this.state.moneyScore - this.state.strenghtBoostPrice >= 0) {
      this.setState({
        moneyScore: this.state.moneyScore - this.state.strenghtBoostPrice,
        counter: this.state.counter + 1,
        strenghtBoostPrice: Math.round(this.state.strenghtBoostPrice * 1.5)
      });

    }
  }

  slingshotCounterClick = () => {
    if (this.state.moneyScore - this.state.slingshotPrice >= 0) {
      this.setState({
        moneyScore: this.state.moneyScore - this.state.strenghtBoostPrice,
        counter: this.state.counter + 2,
        slingshotPrice: this.state.slingshotPrice * 2
      });

    }
  }

  batCounterClick = () => {
    if (this.state.moneyScore - this.state.baseballBatPrice >= 0) {
      this.setState({
        moneyScore: this.state.moneyScore - this.state.baseballBatPrice,
        counter: this.state.counter + 3,
        baseballBatPrice: Math.round(this.state.baseballBatPrice * 2.5)
      });

    }
  }
  spikedBatCounterClick = () => {
    if (this.state.moneyScore - this.state.spikedBatPrice >= 0) {
      this.setState({
        moneyScore: this.state.moneyScore - this.state.spikedBatPrice,
        counter: this.state.counter + 5,
        spikedBatPrice: this.state.spikedBatPrice * 3
      });

    }
  }

  bombCounterClick = () => {
    if (this.state.moneyScore - this.state.bombPrice >= 0) {
      this.setState({
        moneyScore: this.state.moneyScore - this.state.bombPrice,
        counter: this.state.counter + 8,
        bombPrice: this.state.bombPrice * 4
      });

    }
  }


  render() {
    return (
      <div>
        <h4 className="money-score">Money score:&nbsp;${this.state.moneyScore}</h4>
        <div className="zombie-walking">

          <img src={zombieWalking} alt="walking-zombie" onClick={this.counterClick} />
          <p>{this.state.counter}hits</p>
        </div>
        <div className="uppgrade-list">
        <h4>Upgrades</h4>
          <div className="column">
          <p className="upgrade-name">Strenght boost</p>

            <img src={strenghtBoostBottle} alt="strenght-boost-bottle" onClick={this.strenghtBoostCounterClick} />
            <p className="upgrade-info"><span>$</span>{this.state.strenghtBoostPrice}</p>
            <p className="upgrade-info"><span>+</span>1 hits</p>

          </div>
          <div className="column">
          <p className="upgrade-name">Slingshot</p>

            <img src={slingshot} alt="slingshot" onClick={this.slingshotCounterClick} />
            <p className="upgrade-info"><span>$</span>{this.state.slingshotPrice}</p>
            <p className="upgrade-info"><span>+</span>2 hits</p>

          </div>
          <div className="column">
          <p className="upgrade-name">Baseball bat</p>

            <img src={baseballBat} alt="baseball-bat" onClick={this.batCounterClick} />
            <p className="upgrade-info"><span>$</span>{this.state.baseballBatPrice}</p>
            <p className="upgrade-info"><span>+</span>3 hits</p>

          </div>

          <div className="column">
          <p className="upgrade-name">Spiked baseball bat</p>

            <img src={spikedBaseballBat} alt="spiked-baseball-bat" onClick={this.spikedBatCounterClick} />
            <p className="upgrade-info"><span>$</span>{this.state.spikedBatPrice}</p>
            <p className="upgrade-info"><span>+</span>5 hits</p>

          </div>
          <div className="column">
          <p className="upgrade-name">Bomb</p>

            <img src={bomb} alt="bomb" onClick={this.bombCounterClick} />
            <p className="upgrade-info"><span>$</span>{this.state.bombPrice}</p>
            <p className="upgrade-info"><span>+</span>8 hits</p>
          </div>
        </div>
        
        
      </div>
    )
  }


}


export default Counter;