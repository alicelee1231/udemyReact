import Player from "./components/Players";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />

          {/* <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li> */}
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
