import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Desk.css";
import { Hiragana } from "./Hiragana";
import { Kanji } from "./Kanji";
import { Meaning } from "./Meaning";

export function Desk() {
  const { currentWord } = useContext(GameContext);

  return (
    <div className="desks-Desk">
      <Kanji className="kanji" />

      <Hiragana key={currentWord.hiragana} className="hiragana" />

      <Meaning className="meaning" />
    </div>
  );
}
