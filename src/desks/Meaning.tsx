import { useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { Hint } from "../settings/hint";
import { SettingContext } from "../settings/SettingContext";
import "./Meaning.css";

export function Meaning({ className }: Props) {
  const { currentWord, currentShown: gameShown } = useContext(GameContext);

  const { hints } = useContext(SettingContext);
  const hintMeaning = hints.includes(Hint.Meaning);

  const [localShown, setLocalShown] = useState(hintMeaning);

  useEffect(() => {
    if (currentWord) {
      setLocalShown(hintMeaning);
    }
  }, [currentWord, hintMeaning]);

  return (
    <div className={`desks-Meaning ${className}`}>
      <div className={`content ${gameShown || localShown ? "active" : ""}`}>
        {currentWord.chinese}
      </div>
    </div>
  );
}

interface Props {
  className: string;
}
