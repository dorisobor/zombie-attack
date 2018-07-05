import React from "react";
import PlayerNameInput from "./PlayerNameInput";


export default (props) => (
  <div className="start-page-container">
    <h1>Zombie Attack</h1>

    <div className="form-container">
      <PlayerNameInput handleLogin={props.handleLogin} />
    </div>


  </div>


);