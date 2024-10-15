import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Desk.css";
import { Hiragana } from "./Hiragana";
import { Kanji } from "./Kanji";
import { Meaning } from "./Meaning";

export function Desk() {
  const { deskRef } = useContext(GameContext);

  return (
    <div className="desks-Desk" ref={deskRef}>
      <Kanji className="kanji" />

      <Hiragana className="hiragana" />

      <Meaning className="meaning" />
    </div>
  );
}
