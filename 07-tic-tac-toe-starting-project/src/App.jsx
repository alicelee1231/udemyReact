import { act, useState } from "react";

import Player from "./components/Players";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />

          {/* <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li> */}
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlyerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
