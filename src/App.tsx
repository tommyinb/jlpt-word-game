import "./App.css";
import { Control } from "./controls/Control";
import { Desk } from "./desks/Desk";
import { Game } from "./games/Game";
import { History } from "./histories/History";
import { Sale } from "./sales/Sale";
import { SettingContainer } from "./settings/SettingContainer";
import { useAnalytics } from "./useAnalytics";

function App() {
  useAnalytics();

  return (
    <div className="App">
      <SettingContainer>
        <Game>
          <Sale>
            <h1>JLPT 単語</h1>

            <Desk />
            <Control className="control" />

            <History />
          </Sale>
        </Game>
      </SettingContainer>
    </div>
  );
}

export default App;
