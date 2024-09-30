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

  const nextWord = useMemo(() => {
    const oldWordsSet = new Set(oldWords);

    const newWords = allWords
      .filter((word) => !oldWordsSet.has(word))
      .filter((word) => word !== currentWord);

    if (newWords.length <= 0) {
      return undefined;
    }

    if (order === Order.Random) {
      const index = Math.floor(Math.random() * newWords.length);
      return newWords[index];
    } else {
      const nextWords = newWords.filter(
        (newWord) => compareWord(newWord, currentWord) > 0
      );
      if (nextWords.length > 0) {
        return nextWords[0];
      } else {
        return newWords[0];
      }
    }
  }, [allWords, currentWord, oldWords, order]);

  return (
    <div
      className={`controls-Next ${currentShown ? "active" : ""} ${
        currentShown && !nextWord ? "disabled" : ""
      }`}
      onClick={() => {
        if (currentShown) {
          if (nextWord) {
            setCurrentWord(nextWord);

            setCurrentShown(
              (hints.includes(Hint.Kanji) || !nextWord.hiragana) &&
                hints.includes(Hint.Hiragana) &&
                hints.includes(Hint.Meaning)
            );

            setOldWords([...oldWords, currentWord]);
          }
        } else {
          setCurrentShown(true);
        }

        if (settingActive) {
          setSettingActive(false);
        }
      }}
    >
      {allWords.length <= 0 || nextWord ? "次へ" : "終わり"}
    </div>
  );
}
