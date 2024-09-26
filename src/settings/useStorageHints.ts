import { useCallback, useState } from "react";
import { Hint } from "./hint";

export function useStorageHints(): {
  hints: Hint[];
  saveHints: (hints: Hint[]) => void;
} {
  const storageKey = "settings-useStorageHints *qyW7MrMPacrM3hu";

  const [hints, setHints] = useState(() => {
    const text = localStorage.getItem(storageKey);

    if (!text) {
      return [Hint.Kanji, Hint.Meaning];
    }

    try {
      const value = JSON.parse(text);

      const allHints = Object.values(Hint);

      return [...value].filter((item) => allHints.includes(item));
    } catch {
      return [Hint.Kanji, Hint.Meaning];
    }
  });

  const saveHints = useCallback((hints: Hint[]) => {
    setHints(hints);

    const text = JSON.stringify(hints);
    localStorage.setItem(storageKey, text);
  }, []);

  return {
    hints,
    saveHints,
  };
}
