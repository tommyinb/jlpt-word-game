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
      };
    } catch {
      return defaultValue;
    }
  });

  const saveValue = useCallback<typeof setValue>((value) => {
    setValue(value);

    const text = JSON.stringify(value);
    localStorage.setItem(storageKey, text);
  }, []);

  return {
    value,
    saveValue,
  };
}
