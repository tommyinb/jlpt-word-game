import "./App.css";
import { Control } from "./controls/Control";
import { Desk } from "./desks/Desk";
import { GameContainer } from "./games/GameContainer";
import { History } from "./histories/History";

function App() {
  return (
    <div className="App">
      <GameContainer>
        <h1>JLPT Word Game</h1>

        <Desk />
        <Control className="control" />

        <History />
      </GameContainer>
    </div>
  );
}

export default App;
