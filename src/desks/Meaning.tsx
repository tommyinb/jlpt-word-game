import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Meaning.css";

export function Meaning({ className }: Props) {
  const { currentWord } = useContext(GameContext);

  return (
    <div className={`desks-Meaning ${className}`}>{currentWord.chinese}</div>
  );
}

interface Props {
  className: string;
}
