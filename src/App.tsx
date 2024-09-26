import "./App.css";
import { Control } from "./controls/Control";
import { Desk } from "./desks/Desk";
import { Game } from "./games/Game";
import { History } from "./histories/History";
import { Sale } from "./sales/Sale";
import { SettingProvider } from "./settings/SettingProvider";
import { useAnalytics } from "./useAnalytics";

function App() {
  useAnalytics();

  return (
    <div className="App">
      <SettingProvider>
        <Game>
          <Sale>
            <h1>JLPT 単語</h1>

            <Desk />
            <Control className="control" />

            <History />
          </Sale>
        </Game>
      </SettingProvider>
    </div>
  );
}

export default App;
