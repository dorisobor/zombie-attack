import React from "react";
import Player from "./PlayerNameInput";


//start button will lead to the game 

export default ({ history }) => (
<div className = "start-page-container">
<h1>Zombie Attack</h1>

<button onClick={()=> history.push("/Game")}>
 START THE GAME
</button>

<div className = "form-container"> 
 <Player /></div>
  </div>


);