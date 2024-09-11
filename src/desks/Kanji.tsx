import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Kanji.css";

export function Kanji({ className }: Props) {
  const { currentWord } = useContext(GameContext);

  return (
    <div className={`desks-Kanji ${className}`}>
      {currentWord.hiragana ? currentWord.japanese : ""}
    </div>
  );
}

interface Props {
  className: string;
}
