import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./History.css";
import { Line } from "./Line";

export function History() {
  const { oldWords } = useContext(GameContext);

  return (
    <div className="histories-History">
      {oldWords.map((word) => (
        <Line word={word} />
      ))}
    </div>
  );
}
