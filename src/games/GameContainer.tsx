import { ReactNode, useMemo, useState } from "react";
import { GameContext } from "./GameContext";
import n2Verbs from "./n2-verbs.json" assert { type: "json" };
import { Word } from "./word";

export function GameContainer({ children }: Props) {
  const [currentWord, setCurrentWord] = useState<Word>(() => n2Verbs[0]);
  const [currentActive, setCurrentActive] = useState<boolean>(() => false);

  const [nextWords, setNextWords] = useState<Word[]>(() => n2Verbs.slice(1));

  const [oldWords, setOldWords] = useState<Word[]>([]);

  return (
    <GameContext.Provider
      value={useMemo(
        () => ({
          currentWord,
          setCurrentWord,
          currentActive,
          setCurrentActive,
          nextWords,
          setNextWords,
          oldWords,
          setOldWords,
        }),
        [currentActive, currentWord, nextWords, oldWords]
      )}
    >
      {children}
    </GameContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
