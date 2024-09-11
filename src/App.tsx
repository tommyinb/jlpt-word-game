import "./App.css";
import { Control } from "./controls/Control";
import { Desk } from "./desks/Desk";
import { GameContainer } from "./games/GameContainer";
import { History } from "./histories/History";
import { SettingContainer } from "./settings/SettingContainer";

function App() {
  return (
    <div className="App">
      <GameContainer>
        <SettingContainer>
          <h1>JLPT 単語</h1>

          <Desk />
          <Control className="control" />

          <History />
        </SettingContainer>
      </GameContainer>
    </div>
  );
}

export default App;
