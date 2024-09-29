import { ReactNode, useContext, useMemo, useState } from "react";
import { Hint } from "../settings/hint";
import { SettingContext } from "../settings/SettingContext";
import { Word } from "../words/word";
import { WordsLoader } from "../words/WordsLoader";
import { GameContext } from "./GameContext";
import { useCurrentWord } from "./useCurrentWord";

export function Game({ children }: Props) {
  const { currentWord, saveCurrentWord } = useCurrentWord();

  const { hints } = useContext(SettingContext);

  const [currentShown, setCurrentShown] = useState<boolean>(
    () =>
      (hints.includes(Hint.Kanji) || !currentWord.hiragana) &&
      hints.includes(Hint.Hiragana) &&
      hints.includes(Hint.Meaning)
  );

  const [allWords, setAllWords] = useState<Word[]>([]);
  const [oldWords, setOldWords] = useState<Word[]>([]);

  return (
    <GameContext.Provider
      value={useMemo(
        () => ({
          currentWord,
          setCurrentWord: saveCurrentWord,
          currentShown,
          setCurrentShown,
          allWords,
          setAllWords,
          oldWords,
          setOldWords,
        }),
        [allWords, currentShown, currentWord, oldWords, saveCurrentWord]
      )}
    >
      {children}

      <WordsLoader />
    </GameContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
