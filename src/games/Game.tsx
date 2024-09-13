import { ReactNode, useMemo, useState } from "react";
import { File } from "../words/file";
import { Word } from "../words/word";
import { GameContext } from "./GameContext";
import { useCurrentWord } from "./useCurrentWord";
import { WordsLoader } from "./WordsLoader";

export function Game({ children }: Props) {
  const { currentWord, saveCurrentWord } = useCurrentWord();
  const [currentShown, setCurrentShown] = useState<boolean>(() => false);

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
