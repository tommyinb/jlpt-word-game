import { ReactNode, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";

export function SettingContainer({ children }: Props) {
  const [active, setActive] = useState(false);

  const [hintKanji, setHintKanji] = useState(false);
  const [hintHiragana, setHintHiragana] = useState(false);
  const [hintMeaning, setHintMeaning] = useState(false);

  return (
    <SettingContext.Provider
      value={useMemo(
        () => ({
          active,
          setActive,
          hintKanji,
          setHintKanji,
          hintHiragana,
          setHintHiragana,
          hintMeaning,
          setHintMeaning,
        }),
        [active, hintHiragana, hintKanji, hintMeaning]
      )}
    >
      {children}
    </SettingContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
