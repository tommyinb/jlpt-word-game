import { ReactNode, useMemo, useState } from "react";
import { GameContext } from "./GameContext";
import n2Verbs from "./n2-verbs.json" assert { type: "json" };
import { Word } from "./word";

export function GameContainer({ children }: Props) {
  const [currentWord, setCurrentWord] = useState<Word>(() => n2Verbs[0]);
  const [currentShown, setCurrentShown] = useState<boolean>(() => false);

  const [nextWords, setNextWords] = useState<Word[]>(() => n2Verbs.slice(1));

  const [oldWords, setOldWords] = useState<Word[]>([]);

  return (
    <GameContext.Provider
      value={useMemo(
        () => ({
          currentWord,
          setCurrentWord,
          currentShown,
          setCurrentShown,
          nextWords,
          setNextWords,
          oldWords,
          setOldWords,
        }),
        [currentShown, currentWord, nextWords, oldWords]
      )}
    >
      {children}
    </GameContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
