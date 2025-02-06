// EndScreen.js
import React from "react";

function EndScreen({ score, highScore, restart, returnToMenu }) {
  return (
    <div className="end-container">
      <h2>Game Over!</h2>
      <p>Final Score: {score}</p>
      <p>High Score: {highScore}</p>
      <div className="end-buttons">
        <button onClick={restart}>Try Again</button>
        <button onClick={returnToMenu}>Main Menu</button>
      </div>
    </div>
  );
}

export default EndScreen;
