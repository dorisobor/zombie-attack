import React from "react";


function DispayPlayerName(props){
    return (
        <div className = "playername-container">
        <h2>Fight the Zombies, {props.playerName}!</h2>
          </div>
        
        
        );

}

export default DispayPlayerName;