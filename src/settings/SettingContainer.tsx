import { ReactNode, useCallback, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";

export function SettingContainer({ children }: Props) {
  const storageKey = "settings-SettingContainer";

  const [active, setActive] = useState(false);

  const [value, setValue] = useState(() => {
    const text = localStorage.getItem(storageKey);

    try {
      const value = text ? JSON.parse(text) : {};

      return {
        hintKanji: !!value.hintKanji,
        hintHiragana: !!value.hintHiragana,
        hintMeaning: !!value.hintMeaning,
        randomOrder: !!value.randomOrder,
      };
    } catch {
      return {
        hintKanji: true,
        hintHiragana: false,
        hintMeaning: true,
        randomOrder: true,
      };
    }
  });

  const applyValue = useCallback<typeof setValue>((value) => {
    setValue(value);

    const text = JSON.stringify(value);
    localStorage.setItem(storageKey, text);
  }, []);

  const setHintKanji = useCallback(
    (hintKanji: boolean) => applyValue({ ...value, hintKanji }),
    [applyValue, value]
  );
  const setHintHiragana = useCallback(
    (hintHiragana: boolean) => applyValue({ ...value, hintHiragana }),
    [applyValue, value]
  );
  const setHintMeaning = useCallback(
    (hintMeaning: boolean) => applyValue({ ...value, hintMeaning }),
    [applyValue, value]
  );

  const setRandomOrder = useCallback(
    (randomOrder: boolean) => applyValue({ ...value, randomOrder }),
    [applyValue, value]
  );

  return (
    <SettingContext.Provider
      value={useMemo(
        () => ({
          active,
          setActive,
          hintKanji: value.hintKanji,
          setHintKanji,
          hintHiragana: value.hintHiragana,
          setHintHiragana,
          hintMeaning: value.hintMeaning,
          setHintMeaning,
          randomOrder: value.randomOrder,
          setRandomOrder,
        }),
        [
          active,
          setHintHiragana,
          setHintKanji,
          setHintMeaning,
          setRandomOrder,
          value,
        ]
      )}
    >
      {children}
    </SettingContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
