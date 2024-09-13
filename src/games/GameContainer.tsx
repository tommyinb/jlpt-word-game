import { ReactNode, useMemo, useState } from "react";
import { GameContext } from "./GameContext";
import n2Verbs from "./n2-verbs.json" assert { type: "json" };
import { useCurrentWord } from "./useCurrentWord";
import { Word } from "./word";

export function GameContainer({ children }: Props) {
  const { currentWord, saveCurrentWord } = useCurrentWord();
  const [currentShown, setCurrentShown] = useState<boolean>(() => false);

  const [nextWords, setNextWords] = useState<Word[]>(() => n2Verbs);

  const [oldWords, setOldWords] = useState<Word[]>([]);

  return (
    <GameContext.Provider
      value={useMemo(
        () => ({
          currentWord,
          setCurrentWord: saveCurrentWord,
          currentShown,
          setCurrentShown,
          nextWords,
          setNextWords,
          oldWords,
          setOldWords,
        }),
        [currentShown, currentWord, nextWords, oldWords, saveCurrentWord]
      )}
    >
      {children}
    </GameContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
