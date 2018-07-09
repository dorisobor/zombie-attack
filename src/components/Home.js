import React from "react";
import PlayerNameInput from "./PlayerNameInput";


export default (props) => (
  <div className="jumbotron">
    <h1 className="display-4">Zombie Bounty<span className="hunt-headline">HUNT</span></h1>
    <div className="container">

    <p className="lead">The world has been infected by Zombies.The world's population 
    has decreased and it's becoming more and more dangerous. Luckily humanity can rely on the brave zombie 
    bounty hunters who will risk their lives...for a big price. Are you one of them? 
    Join the bounty hunt and get rewared with big bucks!</p>
    <p className="lead"><span>Instructions</span>
    <br /> Collect and gain bounty money by clicking on the zombie.</p>
    <p className="lead"><span>Good luck and be careful out there,&nbsp;friend!</span></p>
  
    </div>
    <div className="form-container">
      <PlayerNameInput handleLogin={props.handleLogin} />
    </div>


  </div>


);