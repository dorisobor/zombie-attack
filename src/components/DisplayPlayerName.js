import React from "react";


function DispayPlayerName(props){
    return (
        <div className = "playername-container">
        <h4>Hello player: {props.playerName}</h4>
          </div>
        
        
        );

}

export default DispayPlayerName;