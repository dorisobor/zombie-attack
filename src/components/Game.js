import React, { Component } from "react";
//imports the gif image as zombieWalking
import zombieWalking from "./../images/zombie-walking.gif";




class Game extends Component {
  render() {
    return (
<div className = "game-container">
<h2>Fight the zombies</h2>
<div className="zombie-walking">
<img src={zombieWalking} alt="walking-zombie"/>
</div>
  </div>

);
}
}

export default Game;