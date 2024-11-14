import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import './App.css';  // Import your custom styles
import './styles.css';  // Make sure this file exists and is correctly imported
import { Chess } from 'chess.js'; // for game logic


const App = () => {
  const [game, setGame] = useState(new Chess()); // Initialize the chess game logic

  // Function to handle moves
  const handleMove = (sourceSquare, targetSquare) => {
    const gameCopy = { ...game }; // Copy the current game state to avoid mutating directly
    const move = gameCopy.move({ from: sourceSquare, to: targetSquare });

    if (move === null) {
      console.log('Invalid move');
      return;
    }
    setGame(gameCopy);
  };

  return (
    <div>
      <h1>Chess Game</h1>
      <Chessboard
        id="chessboard"
        width={400}  // Set the size of the board
        position={game.fen()} // Convert game state to FEN (Forsyth-Edwards Notation) format
        onDrop={(sourceSquare, targetSquare) => handleMove(sourceSquare, targetSquare)}
      />
      {/* Add additional UI elements here, such as a reset button, or display game status */}
    </div>
  );
};

export default App;
