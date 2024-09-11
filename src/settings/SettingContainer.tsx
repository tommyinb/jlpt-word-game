import { ReactNode, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";

export function SettingContainer({ children }: Props) {
  const [active, setActive] = useState(false);

  const [hintKanji, setHintKanji] = useState(true);
  const [hintHiragana, setHintHiragana] = useState(false);
  const [hintMeaning, setHintMeaning] = useState(true);

  const [randomOrder, setRandomOrder] = useState(true);

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
          randomOrder,
          setRandomOrder,
        }),
        [active, hintHiragana, hintKanji, hintMeaning, randomOrder]
      )}
    >
      {children}
    </SettingContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
