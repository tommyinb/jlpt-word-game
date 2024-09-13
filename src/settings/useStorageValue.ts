import { useCallback, useState } from "react";

export function useStorageValue() {
  const storageKey = "settings-useStorageValue";

  const [value, setValue] = useState(() => {
    const text = localStorage.getItem(storageKey);

    const defaultValue = {
      hintKanji: true,
      hintHiragana: false,
      hintMeaning: true,
      randomOrder: true,
      n2Adjective: false,
      n2Adverb: false,
      n2Verb: true,
      n5Adjective: false,
      n5Adverb: false,
      n5Noun: false,
      n5Verb: false,
    };

    if (!text) {
      return defaultValue;
    }

    try {
      const value = JSON.parse(text);

      return {
        hintKanji: !!(value.hintKanji ?? defaultValue.hintKanji),
        hintHiragana: !!(value.hintHiragana ?? defaultValue.hintHiragana),
        hintMeaning: !!(value.hintMeaning ?? defaultValue.hintMeaning),
        randomOrder: !!(value.randomOrder ?? defaultValue.randomOrder),
        n2Adjective: !!(value.n2Adjective ?? defaultValue.n2Adjective),
        n2Adverb: !!(value.n2Adverb ?? defaultValue.n2Adverb),
        n2Verb: !!(value.n2Verb ?? defaultValue.n2Verb),
        n5Adjective: !!(value.n5Adjective ?? defaultValue.n5Adjective),
        n5Adverb: !!(value.n5Adverb ?? defaultValue.n5Adverb),
        n5Noun: !!(value.n5Noun ?? defaultValue.n5Noun),
        n5Verb: !!(value.n5Verb ?? defaultValue.n5Verb),
      };
    } catch {
      return defaultValue;
    }
  });

  const saveValue = useCallback((newValue: typeof value) => {
    setValue(newValue);

    const text = JSON.stringify(newValue);
    localStorage.setItem(storageKey, text);
  }, []);

  return {
    value,
    saveValue,
  };
}
