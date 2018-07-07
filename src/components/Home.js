import React from "react";
import PlayerNameInput from "./PlayerNameInput";


export default (props) => (
  <div className="jumbotron">
    <h1 className="display-4">Zombie Attack</h1>

    <p className="lead">info</p>
  
  
    <div className="form-container">
      <PlayerNameInput handleLogin={props.handleLogin} />
    </div>


  </div>


);