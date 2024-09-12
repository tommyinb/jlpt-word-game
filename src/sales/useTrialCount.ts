import { useContext, useEffect, useMemo, useState } from "react";
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

  const targeted = useMemo(() => {
    try {
      const allLanguages = navigator.languages
        .map((language) => /^\w+/.exec(language))
        .filter((match) => match)
        .map((match) => match![0]);

      const uniqueLanguages = allLanguages.filter(
        (language, index, array) => array.indexOf(language) === index
      );

      const mainLanguages = uniqueLanguages.slice(0, 3);

      return mainLanguages.some((language) => language.startsWith("ko"));
    } catch {
      return false;
    }
  }, []);

  const { oldWords } = useContext(GameContext);
  useEffect(() => {
    if (targeted && oldWords.length === 15) {
      setCount((lastCount) => {
        const nextCount = lastCount + 1;

        localStorage.setItem(storageKey, String(nextCount));

        return nextCount;
      });
    }
  }, [oldWords, targeted]);

  return count;
}
