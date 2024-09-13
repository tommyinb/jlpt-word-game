import { useContext, useMemo } from "react";
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
    allWords,
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

  const newWords = useMemo(() => {
    const oldWordsSet = new Set(oldWords);
    return allWords.filter((word) => !oldWordsSet.has(word));
  }, [allWords, oldWords]);

  return (
    <div
      className={`controls-Next ${currentShown ? "active" : ""}`}
      onClick={() => {
        if (newWords.length <= 0) {
          return;
        }

        if (currentShown) {
          const nextCandidates = (function () {
            const nextCandidates = newWords.filter(
              (newWord) => compareWord(newWord, currentWord) > 0
            );

            if (nextCandidates.length > 0) {
              return nextCandidates;
            } else {
              return newWords;
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
