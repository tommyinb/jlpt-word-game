import { useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import "./Meaning.css";

export function Meaning({ className }: Props) {
  const { currentWord, currentShown: gameShown } = useContext(GameContext);

  const { hintMeaning } = useContext(SettingContext);

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
