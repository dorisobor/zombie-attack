import React from "react";

//this will display the player's name
//gets the name from PlayerNameInput.js
function DispayPlayerName(props){
    return (
        <div className = "playername-container">
        <h2>Fight the Zombies, {props.playerName}!</h2>
          </div>
        
        
        );

}

export default DispayPlayerName;