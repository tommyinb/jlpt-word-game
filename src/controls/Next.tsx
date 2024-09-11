import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import "./Next.css";

export function Next() {
  const {
    currentWord,
    setCurrentWord,
    currentShown: gameShown,
    setCurrentShown: setGameShown,
    nextWords,
    setNextWords,
    oldWords,
    setOldWords,
  } = useContext(GameContext);

  const {
    active: settingActive,
    setActive: setSettingActive,
    hintKanji,
    hintHiragana,
    hintMeaning,
    randomOrder,
  } = useContext(SettingContext);

  return (
    <div
      className={`controls-Next ${gameShown ? "active" : ""}`}
      onClick={() => {
        if (gameShown) {
          const nextIndex = randomOrder
            ? Math.floor(Math.random() * nextWords.length)
            : 0;

          const nextWord = nextWords[nextIndex];
          setCurrentWord(nextWord);

          setGameShown(
            (hintKanji || !nextWord.hiragana) && hintHiragana && hintMeaning
          );

          setNextWords([
            ...nextWords.slice(0, nextIndex),
            ...nextWords.slice(nextIndex + 1),
          ]);

          setOldWords([...oldWords, currentWord]);
        } else {
          setGameShown(true);
        }

        if (settingActive) {
          setSettingActive(false);
        }
      }}
    >
      次へ
    </div>
  );
}
