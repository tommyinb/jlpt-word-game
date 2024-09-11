import { useContext } from "react";
import { GameContext } from "../games/GameContext";
import "./Next.css";

export function Next() {
  const {
    currentWord,
    setCurrentWord,
    currentActive,
    setCurrentActive,
    nextWords,
    setNextWords,
    oldWords,
    setOldWords,
  } = useContext(GameContext);

  return (
    <div
      className="controls-Next"
      onClick={() => {
        if (currentActive) {
          const nextIndex = Math.floor(Math.random() * nextWords.length);

          setCurrentWord(nextWords[nextIndex]);
          setCurrentActive(false);

          setNextWords([
            ...nextWords.slice(0, nextIndex),
            ...nextWords.slice(nextIndex + 1),
          ]);

          setOldWords([...oldWords, currentWord]);
        } else {
          setCurrentActive(true);
        }
      }}
    >
      次へ
    </div>
  );
}
