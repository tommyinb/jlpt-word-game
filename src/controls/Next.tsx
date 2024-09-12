import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import "./Next.css";
import { compareWord } from "./compareWord";

export function Next() {
  const {
    currentWord,
    setCurrentWord,
    currentShown,
    setCurrentShown,
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
      className={`controls-Next ${currentShown ? "active" : ""}`}
      onClick={() => {
        if (currentShown) {
          const nextCandidates = (function () {
            const nextCandidates = nextWords.filter(
              (nextWord) => compareWord(nextWord, currentWord) >= 0
            );

            if (nextCandidates.length > 0) {
              return nextCandidates;
            } else {
              return nextWords;
            }
          })();

          const nextWord =
            nextCandidates[
              randomOrder
                ? Math.floor(Math.random() * nextCandidates.length)
                : 0
            ];

          setCurrentWord(nextWord);

          setCurrentShown(
            (hintKanji || !nextWord.hiragana) && hintHiragana && hintMeaning
          );

          setNextWords(nextWords.filter((word) => word !== nextWord));

          setOldWords([...oldWords, currentWord]);
        } else {
          setCurrentShown(true);
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
