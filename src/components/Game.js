import React from "react";
//imports the gif image as zombieWalking
// import zombieWalking from "./../images/zombie-walking.gif";

import DisplayPlayerName from "./DisplayPlayerName";
import Counter from "./Counter";



function Game(props) {

  return (
    <div className="jumbotron game-container">

      <DisplayPlayerName playerName={props.playerName} />
      <Counter />

    </div>

  );

}


export default Game;