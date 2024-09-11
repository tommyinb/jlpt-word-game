import "./Desk.css";
import { Hiragana } from "./Hiragana";
import { Kanji } from "./Kanji";
import { Meaning } from "./Meaning";

export function Desk() {
  return (
    <div className="desks-Desk">
      <Kanji className="kanji" />

      <Hiragana className="hiragana" />

      <Meaning className="meaning" />
    </div>
  );
}
