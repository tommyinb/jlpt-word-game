import { useContext, useMemo } from "react";
import { GameContext } from "../games/GameContext";
import { SettingContext } from "../settings/SettingContext";
import { Hint } from "../settings/hint";
import { Order } from "../settings/order";
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
    hints,
    order,
  } = useContext(SettingContext);

  const newWords = useMemo(() => {
    const oldWordsSet = new Set(oldWords);
    return allWords.filter((word) => !oldWordsSet.has(word));
  }, [allWords, oldWords]);

  return (
    <div
      className={`controls-Next ${currentShown ? "active" : ""} ${
        newWords.length <= 0 ? "disabled" : ""
      }`}
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
              order === Order.Random
                ? Math.floor(Math.random() * nextCandidates.length)
                : 0
            ];

          setCurrentWord(nextWord);

          setCurrentShown(
            (hints.includes(Hint.Kanji) || !nextWord.hiragana) &&
              hints.includes(Hint.Hiragana) &&
              hints.includes(Hint.Meaning)
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
      {allWords.length <= 0 || newWords.length > 0 ? "次へ" : "終わり"}
    </div>
  );
}
