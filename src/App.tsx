import "./App.css";
import { Control } from "./controls/Control";
import { Desk } from "./desks/Desk";
import { GameContainer } from "./games/GameContainer";
import { History } from "./histories/History";
import { Sale } from "./sales/Sale";
import { SettingContainer } from "./settings/SettingContainer";

function App() {
  return (
    <div className="App">
      <SettingContainer>
        <GameContainer>
          <Sale>
            <h1>JLPT 単語</h1>

            <Desk />
            <Control className="control" />

            <History />
          </Sale>
        </GameContainer>
      </SettingContainer>
    </div>
  );
}

export default App;
