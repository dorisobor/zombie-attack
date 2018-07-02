import React from "react";
import Player from "./PlayerNameInput";


//start button will lead to the game page/component
//export default ({ history })
export default (props) => (
<div className = "start-page-container">
<h1>Zombie Attack</h1>

{/* <button type="submit" onClick={()=> history.push("/Game")}>
 START THE GAME
</button> */}

<div className = "form-container"> 
 <Player handleLogin={props.handleLogin} /></div>


  </div>


);