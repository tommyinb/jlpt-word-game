import { useContext, useEffect, useState } from "react";
import { GameContext } from "../games/GameContext";

export function useTrialCount() {
  const storageKey = "sales-useCountTrial";

  const [count, setCount] = useState(() => {
    const text = localStorage.getItem(storageKey);

    try {
      return text ? parseInt(text) : 0;
    } catch {
      return 0;
    }
  });

  const { oldWords } = useContext(GameContext);
  useEffect(() => {
    if (oldWords.length === 15) {
      setCount((lastCount) => {
        const nextCount = lastCount + 1;

        localStorage.setItem(storageKey, String(nextCount));

        return nextCount;
      });
    }
  }, [oldWords]);

  return count;
}
