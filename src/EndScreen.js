// EndScreen.js
import React from "react";
import end from './end.gif';
function EndScreen({ score, highScore, restart, returnToMenu }) {
  return (
    <div className="end-container">
      <h2>Game Over!</h2>
      
      <div className="end-container1">
      <p>Final Score: {score}</p>
      <p>High Score: {highScore}</p>
      </div>
      
      <div className="end-buttons">
        <img src={end}></img>
        <button onClick={restart}>Try Again</button>
        <button onClick={returnToMenu}>Main Menu</button>
      </div>
    </div>
  );
}

export default EndScreen;
