import React from "react";
//imports the gif image as zombieWalking
import zombieWalking from "./../images/zombie-walking.gif";

import DisplayPlayerName from "./DisplayPlayerName";



function Game(props){

    return (
<div className = "game-container">
<h2>Fight the zombies</h2>
<div className="zombie-walking">
<img src={zombieWalking} alt="walking-zombie"/>
</div>
<DisplayPlayerName  playerName={props.playerName} />
  </div>

);
    
 }
 

export default Game;