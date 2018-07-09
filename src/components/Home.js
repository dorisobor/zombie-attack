import React from "react";
import PlayerNameInput from "./PlayerNameInput";


export default (props) => (
  <div className="jumbotron">
    <h1 className="display-4">Zombie Bounty<span className="hunt-headline">HUNT</span></h1>
    <div className="container">

    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fringilla sem. Quisque eu gravida tellus, eu dignissim ligula. Nunc vehicula efficitur nulla, ut fermentum magna auctor et. Curabitur vulputate erat quis augue sagittis, sit amet facilisis orci laoreet. Nam porta sapien convallis nunc faucibus, id blandit enim ultrices. Integer aliquet arcu odio, sed bibendum turpis aliquet eget. . </p>
  
    </div>
    <div className="form-container">
      <PlayerNameInput handleLogin={props.handleLogin} />
    </div>


  </div>


);