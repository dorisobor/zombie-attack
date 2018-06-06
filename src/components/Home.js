import React from 'react';



export default ({ history }) => (
<div className = "start-page-container">
<h1>Zombie Attack</h1>
<button onClick={()=> history.push("/Game")}>
 START THE GAME
</button>
  </div>
);