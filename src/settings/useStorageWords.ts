import { useCallback, useState } from "react";
import { Word } from "./word";
import { WordLevel } from "./wordLevel";
import { WordType } from "./wordType";

export function useStorageWords(): {
  words: Word[];
  saveWords: (words: Word[]) => void;
} {
  const storageKey = "settings-useStorageWords *WPDJOetuI1nC17q";

  const [words, setWords] = useState(() => {
    const text = localStorage.getItem(storageKey);

    if (!text) {
      return [{ level: WordLevel.N2, type: WordType.Verb }];
    }

    try {
      const value = JSON.parse(text);

      const allLevels = Object.values(WordLevel);
      const allTypes = Object.values(WordType);

      return [...value]
        .filter(
          (item) =>
            allLevels.includes(item.level) && allTypes.includes(item.type)
        )
        .map((item) => ({ level: item.level, type: item.type }));
    } catch {
      return [{ level: WordLevel.N2, type: WordType.Verb }];
    }
  });

  const saveWords = useCallback((words: Word[]) => {
    setWords(words);

    const text = JSON.stringify(words);
    localStorage.setItem(storageKey, text);
  }, []);

  return {
    words,
    saveWords,
  };
}
