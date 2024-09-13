import { useCallback, useState } from "react";

export function useCurrentWord() {
  const storageKey = "games-useCurrentWord";

  const [currentWord, setCurrentWord] = useState(() => {
    const text = localStorage.getItem(storageKey);

    const defaultValue = {
      hiragana: "あいする",
      japanese: "愛する",
      chinese: "(他) 愛",
    };

    if (!text) {
      return defaultValue;
    }

    try {
      const value = JSON.parse(text);

      if (
        !(
          (value.hiragana === undefined ||
            (value.hiragana && typeof value.hiragana === "string")) &&
          value.japanese &&
          typeof value.japanese === "string" &&
          value.chinese &&
          typeof value.chinese === "string"
        )
      ) {
        return defaultValue;
      }

      return value;
    } catch {
      return defaultValue;
    }
  });

  const saveCurrentWord = useCallback<typeof setCurrentWord>((value) => {
    setCurrentWord(value);

    const text = JSON.stringify(value);
    localStorage.setItem(storageKey, text);
  }, []);

  return {
    currentWord,
    saveCurrentWord,
  };
}
