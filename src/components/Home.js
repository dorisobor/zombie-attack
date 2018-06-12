import React from 'react';

import playerName from "./PlayerNameInput";

//start button will lead to the game 

export default ({ history }) => (
<div className = "start-page-container">
<h1>Zombie Attack</h1>
<div className="player-name-input">{playerName}</div>
<button onClick={()=> history.push("/Game")}>
 START THE GAME
</button>
  </div>
);