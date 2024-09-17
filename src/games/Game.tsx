import { ReactNode, useContext, useMemo, useState } from "react";
import { SettingContext } from "../settings/SettingContext";
import { File } from "../words/file";
import { Word } from "../words/word";
import { GameContext } from "./GameContext";
import { useCurrentWord } from "./useCurrentWord";
import { WordsLoader } from "./WordsLoader";

export function Game({ children }: Props) {
  const { currentWord, saveCurrentWord } = useCurrentWord();

  const { hintKanji, hintHiragana, hintMeaning } = useContext(SettingContext);

  const [currentShown, setCurrentShown] = useState<boolean>(
    () => (hintKanji || !currentWord.hiragana) && hintHiragana && hintMeaning
  );

  const [files, setFiles] = useState<File[]>([]);
  const allWords = useMemo(() => files.flatMap((file) => file).sort(), [files]);

  const [oldWords, setOldWords] = useState<Word[]>([]);

  return (
    <>
      <GameContext.Provider
        value={useMemo(
          () => ({
            currentWord,
            setCurrentWord: saveCurrentWord,
            currentShown,
            setCurrentShown,
            allWords,
            oldWords,
            setOldWords,
          }),
          [allWords, currentShown, currentWord, oldWords, saveCurrentWord]
        )}
      >
        {children}
      </GameContext.Provider>

      <WordsLoader setFiles={setFiles} />
    </>
  );
}

interface Props {
  children: ReactNode;
}
