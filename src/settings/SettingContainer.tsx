import { ReactNode, useCallback, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";
import { useStorageValue } from "./useStorageValue";

export function SettingContainer({ children }: Props) {
  const [active, setActive] = useState(false);

  const { value, saveValue } = useStorageValue();

  const setHintKanji = useCallback(
    (hintKanji: boolean) => saveValue({ ...value, hintKanji }),
    [saveValue, value]
  );
  const setHintHiragana = useCallback(
    (hintHiragana: boolean) => saveValue({ ...value, hintHiragana }),
    [saveValue, value]
  );
  const setHintMeaning = useCallback(
    (hintMeaning: boolean) => saveValue({ ...value, hintMeaning }),
    [saveValue, value]
  );

  const setRandomOrder = useCallback(
    (randomOrder: boolean) => saveValue({ ...value, randomOrder }),
    [saveValue, value]
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
