import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import { Hint } from "../settings/hint";
import { Word } from "../words/word";
import "./Line.css";

export function Line({ word }: Props) {
  const { deskRef, currentWord, setCurrentWord, setCurrentShown } =
    useContext(GameContext);
  const { hints } = useContext(SettingContext);

  return (
    <div
      className="histories-Line"
      onClick={() => {
        setCurrentWord(word);

        setCurrentShown(
          (hints.includes(Hint.Kanji) || !word.hiragana) &&
            hints.includes(Hint.Hiragana) &&
            hints.includes(Hint.Meaning)
        );

        deskRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className={`content ${word === currentWord ? "active" : ""}`}>
        <div className="japanese">{word.japanese}</div>
        <div className="hiragana">{word.hiragana ?? word.japanese}</div>
        <div className="chinese">{word.chinese}</div>
      </div>
    </div>
  );
}

interface Props {
  word: Word;
}
