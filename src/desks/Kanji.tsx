import { useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import "./Kanji.css";

export function Kanji({ className }: Props) {
  const { currentWord, currentShown: gameShown } = useContext(GameContext);

  const { hintKanji } = useContext(SettingContext);

  const [localShown, setLocalShown] = useState(hintKanji);

  useEffect(() => {
    if (currentWord) {
      setLocalShown(hintKanji);
    }
  }, [currentWord, hintKanji]);

  return (
    <div className={`desks-Kanji ${className}`}>
      <div className={`content ${gameShown || localShown ? "active" : ""}`}>
        {currentWord.hiragana ? currentWord.japanese : ""}
      </div>
    </div>
  );
}

interface Props {
  className: string;
}
