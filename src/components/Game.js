import React from "react";
//imports the gif image as zombieWalking
// import zombieWalking from "./../images/zombie-walking.gif";

import DisplayPlayerName from "./DisplayPlayerName";
import Counter from "./Counter";



function Game(props){

    return (
<div className = "game-container">
<h2>Fight the zombies</h2>
{/* <div className="zombie-walking">
<img src={zombieWalking} alt="walking-zombie"/>
</div> */}
<DisplayPlayerName  playerName={props.playerName} />
<Counter />

  </div>

);
    
 }
 

export default Game;